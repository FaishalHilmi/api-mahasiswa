const dbPool = require("../config/database");

const getAllMahasiswa = (req, res) => {
  const SQLQuery = "SELECT * FROM mahasiswa";

  dbPool.query(SQLQuery, (error, result) => {
    if (error) {
      res.json({
        message: "Get data failed",
        data: null,
        errorMessage: error,
      });
    }

    res.json({
      message: "Get data succes",
      data: result,
    });
  });
};

const createMahasiswa = (req, res) => {
  const { nama_lengkap, kelas, alamat, link } = req.body;

  const SQLQuery =
    "INSERT INTO mahasiswa (nama_lengkap, kelas, alamat, link) VALUES (?, ?, ?, ?)";
  const data = [nama_lengkap, kelas, alamat, link];

  dbPool.query(SQLQuery, data, (error, result, fields) => {
    if (error) {
      return res.status(404).json({
        message: "Post data failed",
        data: null,
        errorMessage: error,
      });
    }

    res.status(200).json({
      message: "POST data succes",
      data: result,
      body: req.body,
    });
  });
};

const updateMahasiswa = (req, res) => {
  const { id } = req.params;
  const { nama_lengkap, kelas, alamat, link } = req.body;

  const SQLQuery =
    "UPDATE mahasiswa SET nama_lengkap = ?, kelas = ?, alamat = ?, link = ? WHERE id = ?";
  const data = [nama_lengkap, kelas, alamat, link, id];

  dbPool.query(SQLQuery, data, (error, result) => {
    if (error) {
      return res.status(404).json({
        message: "Update data failed",
        data: null,
        errorMessage: error,
      });
    }

    res.status(200).json({
      message: "Update data succes",
      data: result,
      body: req.body,
    });
  });
};

const deleteMahasiswa = (req, res) => {
  const SQLQuery = "DELETE FROM mahasiswa WHERE id = ?";
  const { id } = req.params;

  dbPool.query(SQLQuery, id, (error, result) => {
    if (error) {
      return res.status(404).json({
        message: "Delete data failed",
        data: null,
        errorMessage: error,
      });
    }

    res.status(200).json({
      message: "Delete data succes",
      data: result,
      body: id,
    });
  });
};

module.exports = {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
