export class Constants {
    //static BaseUrl=process.env.REACT_APP_API_URL;
    static BaseUrl = "http://localhost:3007";

}
export class ApiEndpoint {
    static LoginAuthentication = "/authenticate/login";
    static SignupAuthentication = "/authenticate/signup";
    static getAllUser = "/authenticate/getAllUser";
    static refreshAuth = "/authenticate/refresh";
    static PostDoctorInfo = "/doctor/doctorAdd";
    static GetDoctorInfo="/doctor/getDoctor";
    static PostPatientInfo="/patient/patientAdd";
    static GetPatientInfo="/patient/patientGet";
    static UpdatePatientInfo="/patient/patientUpdate";
    static DeletePatientInfo="/patient/patientDelete"
}