const mongoose=require("mongoose");
const { type } = require("os");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    phoneNumber:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        default:""
    },
    profilePicture:{
        type:String,
        default:null
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        enum:['online','offline','working','sleeping'],
        default:'offline'
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
      }],

      jti:{
        type:String,
        default:''
      }
},{timestamps:true});
 module.exports=mongoose.model("user",userSchema);  