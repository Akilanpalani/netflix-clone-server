const { createUserData } = require('../services/user.services');

const registerUser = async (req, res) => {
  const { body } = req;
  const {
    email,
    password,
    selectedPlan,
    paymentMethod,
    upiPayment,
    cardPayment,
  } = body;

  try {
    const userData = await createUserData({
      email,
      password,
      selectedPlan,
      paymentMethod,
      upiPayment,
      cardPayment,
    });
    return res.status(201).json({
      status: true,
      data: userData,
      message: 'User created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
module.exports = registerUser;
