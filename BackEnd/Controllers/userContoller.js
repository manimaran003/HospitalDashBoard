const User=require('../Models/UserModel')
const jwt=require('jsonwebtoken')

const SignIn=(id,expiry)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:`${expiry}m`})
}


exports.SignUpControll=async(req,res,next)=>{
    try{
        const {username,password,email}=req.body
        const userData=await User.create({
            username,
            password,
            email
        })
        console.log("userdata",userData._id)

        const token=SignIn(userData._id,20) 
        res.status(200).json({
            status:"success",
            data:{
                token
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}
exports.LoginControll=async(req,res,next)=>{
    try{
        const {email,password}=req.body
        console.log(req.body)
        const userData=await User.findOne({email}).select('+password')
        console.log(userData)
        if(!userData||!(await userData.correctPassword(password,userData.password))){
            return res.status(401).json({
                status:"fail",
                message:"incorrect password or email"
            })
        }
        const token=SignIn(userData._id,2)
        const refreshToken=SignIn(userData._id,1)
        res.status(200).json({
            status:"success",
            data:{
                token,
                refreshToken
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}

exports.getAllUser=async(req,res,next)=>{
    try{
        let query=User.find()
        //remove the password field in obj
        query.select('-password')
        const userData=await query

        res.status(200).json({
            status:"success",
            data:{
                userData
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
}
}

const JwtCatchError=(err,res)=>{
    const { TokenExpiredError } = jwt;
 
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
      }
      return res.sendStatus(401).send({ message: "Unauthorized!" });
}


exports.ProtectedRoute=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1]
    }
    if(!token){
        res.status(401).json({
            status:"fail",
            message:"no token provided"
        })
    }
    //let decode=jwt.verify(token,process.env.JWT_SECRET)
     await jwt.verify(token, process.env.JWT_SECRET, async(err,decode) => {
        console.log(decode)
         const currentUser =  await User.findById(decode?.id);
       req.user=currentUser
        if (err) {
          return JwtCatchError(err, res);
        }
        next();
      });
}


exports.refreshController=async(req,res)=>{
    let refreshToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        refreshToken=req.headers.authorization.split(' ')[1]
    }
    let DecodeData=jwt.decode(refreshToken)
    console.log("newDecode",DecodeData)
    if(DecodeData){
        const newAccess=SignIn(DecodeData._id,20) 
        return res.status(200).json({
            status:"success",
            data:{
                newAccess,
                refreshToken
            }
        })
    }
}




exports.restrictAccess=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                status:"fail",
                message:"no access to delete"
            })
        }
        next()
    }
}