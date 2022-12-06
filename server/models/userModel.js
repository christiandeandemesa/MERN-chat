const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		confirmPassword: {
			type: String,
			required: true
		},
		profilePic: {
			type: String
		},
		isAdmin: {
			type: Boolean,
			default: false
		}
	},
	{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
