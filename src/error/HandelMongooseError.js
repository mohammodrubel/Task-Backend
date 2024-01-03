const HandelMongooseError = (error)=>{
    
    const errorSource = Object.values(error.errors).map((vl)=>{
        return {
            path:vl?.path,
            message:vl?.message
        }
    })


const statusCode = 400 

    return {
        statusCode:statusCode,
        message:'Validation Error',
        errorSource,
    };
}


module.exports = HandelMongooseError