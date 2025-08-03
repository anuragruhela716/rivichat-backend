const express = require("express");
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend connected successfully");
});

// Signup route
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;

  // यहां तुम DB में user को save करने का code लिख सकते हो (future में)
  res.json({
    status: "ok",
    message: `User ${email} signed up successfully`
  });
});

// Login route (optional)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // यहां authentication का code होगा (future में)
  res.json({
    status: "ok",
    message: `User ${email} logged in successfully`
  });
});

// Port config
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
