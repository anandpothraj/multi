const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    accountType: {
      type:String,
      required:true,
      trim:true,
  },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    phone:{
      type:Number,
      required:true,
      trim:true,
      minlength: 10,
      maxlength: 10,
    },
    secretCode: {
      type: Number,
      required: true,
      trim: true,
      minlength: 4,
      maxlength:4,
    },
    age:{
        type:Number,
        required:true,
        trim:true,
    },
    dob:{
      type:Date,
      required:true,
      trim:true,
    },
    gender:{
      type:String,
      required:true,
      trim:true,
    },
    aadhaar:{
      type:Number,
      required:true,
      trim:true,
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;


