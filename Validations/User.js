const joi=require("joi");
const ObjectId=require("mongoose").Types.ObjectId


module.exports.register=joi.object({
    email:joi.string().required()
})