const mongoose=require("mongoose");

module.exports.mongoDb=async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("mongoDB connected");
    })
    .catch((error)=>{
        console.log("DB connection error");
    })
}