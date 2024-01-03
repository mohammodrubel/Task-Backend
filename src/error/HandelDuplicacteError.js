const HandelDuplicateError = (error) => {
  const match = error.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSource = [
    {
      path: "",
      message: `${extractedMessage} is Email already exists`,
    },
  ];
  const statusCode = 400;

  return {
    statusCode: statusCode,
    message: "Invalid Id",
    errorSource,
  };
};

module.exports = HandelDuplicateError;
