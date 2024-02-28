const User = require('../models/auth.models');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    // Compare the password with the one stored in the database
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    // Update user's document with login date
    user.lastLoginDate = new Date();
    await user.save();

    // If the password matches, return success
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
