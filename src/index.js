const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("testing");
});

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
