const { loginUser } = require('../services/auth.services');

const loginController = async (req, res) => {
  const { body } = req;
  if (!body) {
    return res.status(400).json({
      status: false,
      message: 'Invalid request format',
    });
  }
  const { email, password } = body;

  try {
    const user = await loginUser({
      email,
      password,
    });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'Invalid credentials',
      });
    }
    return res.status(200).json({
      status: true,
      data: user.toJSON(),
      message: 'User logged in successfully',
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

module.exports = loginController;
