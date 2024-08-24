const express=require("express");
const app=express();
const router=require("./routers/index")
const server= require("http").createServer(app);
const io = require("socket.io")(server);
const mongoDb=require("./common/index")

app.use(express.json())
require("dotenv").config();
app.use("/Bitcode/v1",router);


app.listen(process.env.PORT,()=>{
    console.log("server is started at",process.env.PORT);
    mongoDb.connection.mongoDb()
})

