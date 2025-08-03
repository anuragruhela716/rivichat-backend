const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test API
app.get("/api/test", (req, res) => {
  res.json({ status: "ok", message: "Backend connected successfully!" });
});

// Signup API
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;

  // अभी हम database नहीं जोड़ रहे हैं, केवल success response भेज रहे हैं
  res.json({ status: "ok", message: User ${email} signed up successfully });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // यहां भी database नहीं है, simple success message देंगे
  res.json({ status: "ok", message: Welcome back ${email} });
});

app.listen(port, () => {
  console.log(Server running on port ${port});
});
