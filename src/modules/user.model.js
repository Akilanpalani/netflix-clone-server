const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String },
  selectedPlan: { type: String },
  paymentMethod: { type: String }, // it has two options 'credit/debit' or 'UPI / Netbanking'
  upiPayment: { type: String, unique: true },
  cardPayment: { type: String, unique: true },
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await userModel.findOne(email, password);
  return user;
};
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
