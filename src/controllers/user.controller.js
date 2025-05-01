const userService = require('../services/user.service');

// User signup
exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Call the service to handle signup
    const newUser = await userService.signup(email, password, name);

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Call the service to handle login
    const user = await userService.login(email, password);
    console.log(user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.userId;

    // Call the service to get user profile
    const user = await userService.getProfile(userId);

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Edit user profile
exports.editProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.userId;

    // Call the service to edit user profile
    const updatedUser = await userService.editProfile(userId, { name, email });

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete user profile
exports.deleteProfile = async (req, res) => {
  try {
    const userId = req.userId;

    // Call the service to delete user profile
    await userService.deleteProfile(userId);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
