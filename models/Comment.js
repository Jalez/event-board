/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
	createdBy: {
		type: Schema.ObjectId,
		ref: 'User',
	},
	text: {
		type: String,
		maxlength: [500, 'Text must be shorter than 500 letters.'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	issue: {
		type: Schema.ObjectId,
		ref: 'Issue',
	},
	parent: {
		type: Schema.ObjectId,
		refPath: 'parentModel',
	},
	parentModel: {
		type: String,
		enum: ['Issue', 'Comment'],
	},
	numberOfChildren: {
		type: Number,
	},
	modifiedAt: {
		type: Date,
	},
});

//Static method to
CommentSchema.statics.countComments = async function (
	parentId,
	parentModel,
	childModel,
	issueId
) {
	//Pipeline
	// https://docs.mongodb.com/manual/core/aggregation-pipeline/
	const commentsOfParentArray = await this.aggregate([
		{ $match: { parent: parentId } },
		{ $count: 'len' },
	]);
	const commentsOfIssueArray = await this.aggregate([
		{ $match: { issue: issueId } },
		{ $count: 'len' },
	]);

	const parentCommentsComments = commentsOfParentArray[0]?.len;
	const issueCommentsCount = commentsOfIssueArray[0]?.len;
	try {
		if (parentModel === childModel) {
			await this.model(`${parentModel}`).findByIdAndUpdate(parentId, {
				numberOfChildren: parentCommentsComments ? parentCommentsComments : 0,
			});
		}
		if (issueId) {
			await this.model(`Issue`).findByIdAndUpdate(issueId, {
				numberOfChildren: issueCommentsCount ? issueCommentsCount : 0,
			});
		}
	} catch (error) {
		console.log('countComment Error: ' + error);
	}
};

// Recount comments after save is called
CommentSchema.post('save', async function () {
	this.constructor.countComments(
		this.parent,
		this.parentModel,
		'Comment',
		this.issue
	);
});
//Recount comments after remove is called.
CommentSchema.post('remove', async function () {
	console.log('Updating comment count');
	await this.constructor.countComments(
		this.parent,
		this.parentModel,
		'Comment',
		this.issue
	);
});

//Delete all child comments before remove
CommentSchema.pre('remove', async function () {
	console.log(this);
	console.log(`Comments being removed from comment ${this._id}`);
	await this.model('Comment').deleteMany({ parent: this._id });
});

module.exports = mongoose.model('Comment', CommentSchema);
