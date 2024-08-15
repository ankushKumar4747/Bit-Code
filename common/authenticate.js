const jwt =require("jsonwebtoken");

module.exports.gettoken=async (data)=>{
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "60 days"
        });
        return token;
}