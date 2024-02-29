const userModel = require('../modules/user.model');

const loginUser = async (email, password) => {
  try {
    const user = await userModel.findByCredentials(email, password);
    return user;
  } catch (error) {
    console.error('Error to login user', error.message);
    throw error;
  }
};

module.exports = {
  loginUser,
};
