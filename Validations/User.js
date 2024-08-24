const joi=require("joi");
const ObjectId=require("mongoose").Types.ObjectId


module.exports.register=joi.object({
    email:joi.string().required(),
    password:joi.string().required()
})

module.exports.otpVerify=joi.object({
    otp:joi.string().required(),
    _id:joi.string().required()
})  