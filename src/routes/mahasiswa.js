const express = require("express");
const {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = require("../controllers/mahasiswa.controllers");
const upload = require("../middleware/multer");

const router = express.Router();

router.get("/", getAllMahasiswa);
router.post("/", upload.single("photo"), createMahasiswa);
router.put("/:id", upload.single("photo"), updateMahasiswa);
router.delete("/:id", deleteMahasiswa);

module.exports = router;
