const dbPool = require("../config/database");

const getAllData = () => {
  const SQLQuery = "SELECT * FROM mahasiswa";

  dbPool.query(SQLQuery, (error, result, fields) => {
    if (error) throw error;

    res.send(result);
  });
};
