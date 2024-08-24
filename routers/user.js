const router=require("express").Router();
const Controller=require('../controller/index')

router.post("/register",Controller.userController.register);
router.post("/otpVerify",Controller.userController.otpVerify);

module.exports=router;


