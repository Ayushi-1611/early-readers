// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

dotenv.config({ path: "server/config/config.env" });
const app = express();
app.use(bodyParser.json());

// Apply CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
