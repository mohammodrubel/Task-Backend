const HandelMongooseError = require("./HandelMongooseError");
const HandelCastError = require("./HandelCastError");
const HandelDuplicateError = require("./HandelDuplicacteError");
const WebError = require("./AppError");

const globalError = (error, req, res, next) => {
  let statusCode = 500;
  let message = "somthing went wrong";
  let errorSource = [{ path: "", message: "shomthing Went Wrong" }];

  if (error.name === "ValidationError") {
    const responce = HandelMongooseError(error);
    statusCode = responce.statusCode,
    message = responce.message
    errorSource = responce.errorSource
  }else if(error.name === 'CastError'){
    const responce = HandelCastError(error);
    statusCode = responce.statusCode,
    message = responce.message
    errorSource = responce.errorSource
  }else if(error?.code === 11000){
    const responce = HandelDuplicateError(error);
    statusCode = responce.statusCode,
    message = responce.message
    errorSource = responce.errorSource
  }else if (error instanceof WebError){
    statusCode = error?.statusCode,
    message = error?.message,
    errorSource = [
        {
            path:"",
            message:error?.message
        }
    ]
  }else if(error instanceof Error){
    (message = error?.message),
    errorSource = [
        path = "",
        message = error?.message
    ]

  }

  // Final Return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    // error: error,
  });
};

module.exports = globalError;


