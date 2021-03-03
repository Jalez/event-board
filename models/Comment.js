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
	const arr = await this.aggregate([
		{ $match: { parent: parentId } },
		{ $count: 'len' },
	]);
	console.log(arr);
	const len = arr[0]?.len;
	try {
		if (parentModel === childModel) {
			await this.model(`${parentModel}`).findByIdAndUpdate(parentId, {
				numberOfChildren: len ? len : 0,
			});
		}
		if (issueId) {
			const commentsOfIssue = await this.model(childModel).find({
				issue: issueId,
			});
			const Issue = await this.model('Issue').findById(issueId);
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
	console.log(`Comments being removed from comment ${this._id}`);
	await this.model('Comment').deleteMany({ parent: this._id });
});

module.exports = mongoose.model('Comment', CommentSchema);
