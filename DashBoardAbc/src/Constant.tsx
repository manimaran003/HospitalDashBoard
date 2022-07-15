export class Constants{
    static BaseUrl=process.env.REACT_APP_API_URL;
}
export class ApiEndpoint{
    static LoginAuthentication="/authenticate/login";
    static SignupAuthentication="/authenticate/signup";
}