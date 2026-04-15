const User = require("../models/User");

// @desc    Get current logged in user
// @route   GET /api/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    // req.user is set in auth middleware
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
