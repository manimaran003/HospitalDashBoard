const Doctor=require('../Models/DoctorModel')

const { v4: uuidv4 } = require('uuid');
exports.DoctorsController=async(req,res)=>{
    try{
        const {doctorName,dob,country,address,email,phoneNumber,specialist,doctorImage}=req.body

        const duplicateuser=await Doctor.findOne({email})
    
        if(duplicateuser){
            return res.status(400).json({
                status:"fail",
                message:"doctor already exists"
            })
        }
        let empId=uuidv4()
        const doctor=await Doctor.create({empId,doctorName,dob,country,address,email,phoneNumber,specialist,doctorImage})
        return res.status(200).json({
            status:"success"
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}

exports.GetAllDoctorController=async(req,res)=>{
    try{
        let query= Doctor.find()
       let doctorUser=await query
        return res.status(200).json({
            status:"success",
            doctorUser
        })
}
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}