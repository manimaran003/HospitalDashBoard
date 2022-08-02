const Patient=require('../Models/PatientModel')
exports.AddPatientController=async(req,res)=>{
    try{
        const {patientName,dob,country,address,email,phoneNumber,age,admitDate,patientImage}=req.body

        const duplicateuser=await Patient.findOne({email})
    
        if(duplicateuser){
            return res.status(400).json({
                status:"fail",
                message:"doctor already exists"
            })
        }
        const patient=await Patient.create({patientName,dob,country,address,email,phoneNumber,age,admitDate,patientImage})
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

exports.GetPatientController=async(req,res)=>{
    try{
        let query=Patient.find()
        query.select("-__v")
        let patient=await query
        console.log(patient)
        return res.status(200).json({
            status:"success",
            patient
        })
    }
    catch(err){
       console.log(err)
    }
}

exports.UpdatePatientController=async(req,res)=>{
    try{
        const {patientName,dob,country,address,email,phoneNumber,age,admitDate,patientImage}=req.body
        let user=await Patient.findOne({email})
        console.log(user,"new user")
        await Patient.findByIdAndUpdate(user._id,req.body,{new:true})
        return res.status(200).json({
            status:"success",
            message:"successfully updated"
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}

exports.DeletePatientController=async(req,res)=>{
    try{
        console.log(req.body,"james")
       
        const response=await Patient.findByIdAndDelete(req.body)
        console.log(response)
        return res.status(200).json({
            status:"success",
            message:"deleted"
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}