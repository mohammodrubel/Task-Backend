const { Schema, model } = require("mongoose");
const WebError = require("../error/AppError");
const httpStatus = require("http-status");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        default:false
    },
}, {
    timestamps: true
});

contactSchema.pre('save', async function (next) {
    const isEmailExistInMyDatabase = await model('Contact').findOne({ email: this.email });

    if (isEmailExistInMyDatabase) {
        throw new WebError(httpStatus.BAD_REQUEST, 'This email is already in use!');
    }
    next();
});

module.exports = model('Contact', contactSchema);
