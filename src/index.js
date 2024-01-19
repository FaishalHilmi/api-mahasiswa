require("dotenv").config();

const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswa");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/mahasiswa", mahasiswaRoutes);

app.get("/", (req, res) => {
  res.send("testing");
});

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
