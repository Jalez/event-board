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
		required: true,
		enum: ['Issue', 'Comment'],
	},
	numberOfChildren: {
		type: Number,
	},
	modifiedAt: {
		type: Date,
	},
});

//Static method to get avg of course tuitions
CommentSchema.statics.getAverageRating = async function (parent, parentModel) {
	// console.log('Calculating avg cost...'.blue.inverse);

	//Pipeline
	// https://docs.mongodb.com/manual/core/aggregation-pipeline/
	const arr = await this.aggregate([
		{
			$match: { bootcamp: bootcampId },
		},
		{
			$group: {
				_id: '$bootcamp',
				averageRating: { $avg: '$rating' },
			},
		},
	]);

	try {
		await this.model(`${parentModel}`).findByIdAndUpdate(bootcampId, {
			averageRating: arr[0].averageRating,
		});
	} catch (error) {
		console.log('Course Error: ' + error);
	}
};

// Call getAverageCost after save
CommentSchema.post('save', function () {
	this.constructor.getAverageRating(this.parent, this.parentModel);
});

//Call getAverageCost before remove
CommentSchema.pre('remove', function () {
	this.constructor.getAverageRating(this.bootcamp);
});

module.exports = mongoose.model('Comment', CommentSchema);
