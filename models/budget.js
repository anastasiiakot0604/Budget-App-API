const Joi = require("joi");
const mongoose = require("mongoose");

const Budget = mongoose.model("Budget", new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000000,
    trim: true,
    get: v => v.toFixed(2),
    set: v => v.toFixed(2)
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },    
}));
  
function validateBudget(budget) {
  const schema = {
    budget: Joi.number()
      .min(0)
      .max(1000000000)
      .required(),
    startDate: Joi.date()       
      .required(),        
    endDate: Joi.number()
      .required()
  };
  return Joi.validate(budget, schema);
}
  
exports.Budget = Budget;
exports.validateBudget = validateBudget;