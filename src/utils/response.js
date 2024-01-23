const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    message: message,
    payload: data,
  });
};

module.exports = response;
