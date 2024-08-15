const _=require("lodash");


module.exports.generateRandomNumberString=async(len)=>{
    let str=_.times(len,()=>_.random(35).toString(36)).join("")
    return str;
}