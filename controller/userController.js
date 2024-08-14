const Validation=require("../Validations/index")

module.exports.register=(req,res)=>{
    try{
        Validation.User.register.validateAsync(req.body);
    
        

    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}