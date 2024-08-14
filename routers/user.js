const router=require("express").Router();
const Controller=require('../controller/index')

router.get("/register",Controller.userController.register)

module.exports=router;


