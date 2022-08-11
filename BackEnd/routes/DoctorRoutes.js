const express=require('express')
const {DoctorsController,GetAllDoctorController}=require('../Controllers/DoctorController')
const {ProtectedRoute}=require("../Controllers/userContoller")
const router=express.Router()
router.route("/doctorAdd").post(ProtectedRoute,DoctorsController)
router.route("/getDoctor").get(ProtectedRoute,GetAllDoctorController)
module.exports=router