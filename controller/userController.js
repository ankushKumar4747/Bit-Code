const Validation = require("../Validations/index");
const models = require("../models/index");
const { constants } = require("../common/index")
const services = require("../services/index");
const bcrypt= require("bcrypt");
const auth=require("../common/authenticate");
const functions=require("../common/functions")
const mongoose=require("mongoose")

const ObjectId=mongoose.Types.ObjectId;

module.exports.register = async (req, res) => {
    Validation.User.register.validateAsync(req.body);
    try {
        const doc = await models.User.findOne({
            email: (req.body.email).toLowerCase(),
            isDeleted: false
        })
        if (doc) {
            res.status(409).json({
                message: constants.MESSAGES.EMAIL_ALREADY_EXIST,
                succes: false
            });
        } else {
            // const  user=new models.User(req.body);
            // const respons= await user.save();
            const otp = Math.floor(1000 + Math.random() * 9000);
            const salt= await bcrypt.genSalt(12);
            const hashedPassword= await bcrypt.hash(req.body.password,salt);
            const jti= await functions.generateRandomNumberString(25);
            const payload = {
                email: req.body.email,
                otp: otp,
                password:hashedPassword,
                jti:jti
            };
            
            const response=await models.User.create(payload);
            const findUser=await models.User.findOne({email:req.body.email})

            const data={
                _id:ObjectId(findUser._id),
                jti:jti
            }
            const token=await auth.gettoken(data);
            services.nodeMailer.OTPSend(req.body.email, otp)
            res.status(201).json({
                message: constants.MESSAGES.REGISTER_SUCCESSFULLY,        
                jwt:token,                                                                              
                succes: true,
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

