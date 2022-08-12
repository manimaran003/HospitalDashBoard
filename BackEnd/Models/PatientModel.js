const mongoose=require('mongoose')
const validator=require('validator')

const PatientSchema=mongoose.Schema({
    patientName:{
        type:String,
        required:[true,'please fill the patientName'],
        unique:true
    },
    address:{
        type:String,
        require:[true,'please fill the address']
    },
    email:{
        type:String,
        require:[true,'please fill the email'],
        validate:[validator.isEmail,'please provide a vaild email']
    },
    phoneNumber:{
        type:String,
        require:[true,'please fill the phonenumber'],
    },
    dob:{
        type:Date,
        require:[true,"please fill the date"]
    },
    country:{
        type:String,
        require:[true,"please fill the country"]
    },
    age:{
        type:Number,
        require:[true,"please fill the age"]
    },
    admitDate:{
        type:Date,
    },
    patientImage:{
        type:Buffer
    }
})
const Patient=mongoose.model("Patient",PatientSchema)
module.exports=Patient