const sendResponse = (res, data) => {
    res.status(data?.statusCode).json({
        success: data?.statusCode || 500,
        statusCode: data?.statusCode,
        message: data?.message,
        data: data?.data
    });
};


module.exports = sendResponse