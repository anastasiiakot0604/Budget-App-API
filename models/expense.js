const Joi = require("joi");
const mongoose = require("mongoose");

const Expense = mongoose.model("Expense", new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01,
    max: 1000000,
    trim: true,
    get: v => v.toFixed(2),
    set: v => v.toFixed(2)
  },
  expenseTitle: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true
  },
  expenseCategory: {
    type: Array,
    required: true,
		enum: ['utilities', 'food&beverages', 'healthy&hygiene', 'entertainment', 'clothes', 'transport', 'other']
	},
	expenseDate: {
		type: Date,
		required: true
	} 
}));
  
function validateExpense(expense) {
  const schema = {
    amount: Joi.number()
    	.min(0.01)
      .max(1000000)
      .required(),
		expenseTitle: Joi.string()
			.min(3)
			.max(100)
      .required(),        
    expenseCategory: Joi.array()
			.required(),
		expenseDate: Joi.date()
			.required(),
  };
    return Joi.validate(expense, schema);
}
  
exports.Expense = Expense;
exports.validateExpense = validateExpense;