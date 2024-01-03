const CatchAsync = (myFunction)=>{
    return (req,res,next)=>{
        Promise.resolve(myFunction(req,res,next)).catch((err)=>next(err))
    }
}


module.exports = CatchAsync