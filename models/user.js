const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongooseSchema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    }
  })
);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(3)
      .max(50)
      .required()
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.userSchema = userSchema;
exports.validateUser = validateUser;
