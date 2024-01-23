require("dotenv").config();

const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswa");
// const upload = require("./middleware/multer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/mahasiswa", mahasiswaRoutes);

// app.post("/upload", upload.single("photo"), (req, res) => {
//   res.json({
//     message: "upload berhasil",
//     file: req.file,
//   });
// });

app.use((error, req, res, next) => {
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listen at http://localhost:${PORT}`);
});
