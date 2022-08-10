const express=require('express')
const {AddPatientController,GetPatientController,UpdatePatientController,DeletePatientController}=require('../Controllers/PatientController')
const {ProtectedRoute}=require("../Controllers/userContoller")
const router=express.Router()
router.route("/patientAdd").post(ProtectedRoute,AddPatientController)
router.route("/patientGet").get(ProtectedRoute,GetPatientController)
router.route("/patientUpdate").patch(ProtectedRoute,UpdatePatientController)
router.route("/patientDelete").delete(ProtectedRoute,DeletePatientController)
module.exports=router