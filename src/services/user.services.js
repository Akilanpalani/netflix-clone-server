const userModel = require('../modules/user.model');

const createUserData = async (userData) => {
  try {
    const user = new userModel(userData);
    const saveUserData = await user.save();
    console.log('User created successfully', saveUserData);
    return user;
  } catch (error) {
    console.error('Error to create user', error.message);
    throw error;
  }
};

module.exports = {
  createUserData,
};
