const express=require("express")
const jwtRouter=require("./routes/jwtRoutes")
const userRouter=require('./routes/userRoutes')
const app=express()
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
credentials:true,          
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
// app.use("/auth",jwtRouter)
app.use("/authenticate",userRouter)
module.exports=app