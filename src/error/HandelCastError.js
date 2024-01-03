const HandelCastError = (error) => {
    // const match = errorMessage.match(/value "(.*?)" \(type string\)/);
  const errorSource = [{ path: error.path, message:'invalid Id' +  error.stringValue  }];

  const statusCode = 400;

  return {
    statusCode: statusCode,
    message: "Invalid Id",
    errorSource,
  };
};

module.exports = HandelCastError;
