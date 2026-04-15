const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// Connect to database
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

// Route files
const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");
const crypto = require("./routes/cryptoRoutes");

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use("/api", auth); // POST /api/register, POST /api/login
app.use("/api", user); // GET /api/profile
app.use("/api/crypto", crypto); // GET /api/crypto, GET /api/crypto/gainers, etc.

app.get("/", (req, res) => res.send("Coinbase Clone API is running..."));

module.exports = app;
