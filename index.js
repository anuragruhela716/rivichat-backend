const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000; // Render 10000 port पर bind करता है

// Root route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend connected successfully" });
});

// Signup route
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Email and Password are required" });
  }

  res.json({ status: "ok", message: `User ${email} signed up successfully` });
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Email and Password are required" });
  }

  res.json({ status: "ok", message: `Welcome back ${email}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
