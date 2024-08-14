const router=require("express").Router();
const Controller=require('../controller/index')

router.post("/register",Controller.userController.register)

module.exports=router;


