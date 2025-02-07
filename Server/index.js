const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Login Route (Receive Data from React Native)
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received Login Data:", { email, password });

  // Respond to the client
  res.json({ message: "Login successful", email });
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
