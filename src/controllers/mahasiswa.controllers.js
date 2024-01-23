const dbPool = require("../config/database");
const response = require("../utils/response");

const getAllMahasiswa = (req, res) => {
  const SQLQuery = "SELECT * FROM mahasiswa";

  dbPool.query(SQLQuery, (error, result) => {
    if (error) response(500, error, "Data Not Found", res);

    response(200, result, "Get Data Succesfully", res);
  });
};

const createMahasiswa = (req, res) => {
  const { nama_lengkap, kelas, alamat } = req.body;
  const filename = req.file.filename;
  console.log(filename);

  const filenamed = "http";

  const SQLQuery =
    "INSERT INTO mahasiswa (nama_lengkap, kelas, alamat, link) VALUES (?, ?, ?, ?)";
  const data = [nama_lengkap, kelas, alamat, filename];

  dbPool.query(SQLQuery, data, (error, result) => {
    if (error) response(500, error, "Post data failed", res);

    if (result?.affectedRows) {
      const { insertId } = result;

      const data = [
        {
          insertId,
          data: req.body,
          image: filename,
          result,
        },
      ];

      response(200, data, "Post data succesfully", res);
    }
  });
};

const updateMahasiswa = (req, res) => {
  const { id } = req.params;
  const filename = req.file.filename;
  const { nama_lengkap, kelas, alamat } = req.body;

  const SQLQuery =
    "UPDATE mahasiswa SET nama_lengkap = ?, kelas = ?, alamat = ?, link = ? WHERE id = ?";
  const data = [nama_lengkap, kelas, alamat, filename, id];

  dbPool.query(SQLQuery, data, (error, result) => {
    if (error) response(500, error, "Update data failed", res);

    if (result?.affectedRows) {
      response(200, result, "Post data succesfully", res);
    }
  });
};

const deleteMahasiswa = (req, res) => {
  const SQLQuery = "DELETE FROM mahasiswa WHERE id = ?";
  const { id } = req.params;

  dbPool.query(SQLQuery, id, (error, result) => {
    if (error) response(500, error, "Delete data failed", res);

    if (result?.affectedRows) {
      response(200, result, "Delete data succesfully", res);
    }
  });
};

module.exports = {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
