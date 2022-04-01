const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val),
            message: 'Please enter a valid email',
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be 8 characters or longer'],
    },
    imgUrl: {
        type: String,
        required: [true, 'Profile img is required']
    }
    },
    {timestamps: true}
);

UserSchema.virtual('confirm')
    .get( () => this._confirm )
    .set( value => this._confirm = value ); 

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
