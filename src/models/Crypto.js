const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    symbol: {
      type: String,
      required: [true, "Please add a symbol"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    image: {
      type: String,
      required: [true, "Please add an image URL"],
    },
    "24h Change": {
      type: Number,
      required: [true, "Please add the 24h Change percentage"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Crypto", cryptoSchema);
