const Crypto = require("../models/Crypto");

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
exports.getCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find();

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
exports.getGainers = async (req, res) => {
  try {
    // Sort by 24h Change descending
    const cryptos = await Crypto.find().sort({ "24h Change": -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
exports.getNewListings = async (req, res) => {
  try {
    // Sort by creation date descending
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Public/Private?
exports.createCrypto = async (req, res) => {
  try {
    const crypto = await Crypto.create(req.body);

    res.status(201).json({
      success: true,
      data: crypto,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
