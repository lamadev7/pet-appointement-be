const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new Error('No authentication token, access denied');
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by id
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Attach user to request object
    req.user = {
      userId: user._id,
      email: user.email
    };

    next();
  } catch (error) {
    res.status(401).json({ 
      message: error.message || 'Authentication failed',
      error: 'Please authenticate'
    });
  }
};

module.exports = authMiddleware; 