const express=require("express");
const app=express();
const router=require("./routers/index")
const server= require("http").createServer(app);
const io = require("socket.io")(server);
const mongoDb=require("./common/index")
require("dotenv").config();
app.use("/whatsapp/v1",router);


app.listen(process.env.PORT,()=>{
    console.log("server is started at",process.env.PORT);
    mongoDb.connection.mongoDb()
})

