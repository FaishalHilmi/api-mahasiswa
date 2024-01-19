const express = require("express");
const {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = require("../controllers/mahasiswa.controllers");

const router = express.Router();

router.get("/", getAllMahasiswa);
router.post("/", createMahasiswa);
router.put("/:id", updateMahasiswa);
router.delete("/:id", deleteMahasiswa);

module.exports = router;
