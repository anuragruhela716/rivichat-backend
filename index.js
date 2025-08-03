const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/test", (req, res) => {
  res.json({ status: "ok", message: "Backend connected successfully!" });
});

app.listen(port, () => console.log(Server running on port ${port}));
