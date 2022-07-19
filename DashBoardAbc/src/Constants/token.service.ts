const setSignupUser=(user:string)=>{
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
}
// const setLoginUser=(logged:string)=>{
//     console.log(JSON.stringify(logged));
//     localStorage.setItem("logged", JSON.stringify(logged));
// }
const setAccessToken=(user:string)=>{
    localStorage.setItem("accessToken", JSON.stringify(user));
  }
  const setRefreshToken=(user:string)=>{
    localStorage.setItem("RefreshToken", JSON.stringify(user));
  }
  const UpdateAccessToken=(token:string)=>{
    let user = JSON.parse(localStorage.getItem('accessToken') || '{}')
    console.log("older access token",user)
    user=token
    console.log("user new access token",user)
    localStorage.setItem("accessToken", JSON.stringify(user));
  }
  const getAccessToken=()=>JSON.parse(localStorage.getItem('accessToken') || '{}')
  const getRefreshToken=()=>JSON.parse(localStorage.getItem('RefreshToken') || '{}')
  
const TokenService={
    setSignupUser,
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken,
    UpdateAccessToken
}
export default TokenService