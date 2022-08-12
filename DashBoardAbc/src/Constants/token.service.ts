const setSignupUser = (user: string) => {
  console.log(JSON.stringify(user));
  sessionStorage.setItem('user', JSON.stringify(user));
};
// const setLoginUser=(logged:string)=>{
//     console.log(JSON.stringify(logged));
//     localStorage.setItem("logged", JSON.stringify(logged));
// }
const setAccessToken = (user: string) => {
  sessionStorage.setItem('accessToken', JSON.stringify(user));
};
const setRefreshToken = (user: string) => {
  sessionStorage.setItem('RefreshToken', JSON.stringify(user));
};
const UpdateAccessToken = (token: string) => {
  let user = JSON.parse(sessionStorage.getItem('accessToken') || '{}');
  console.log('older access token', user);
  user = token;
  console.log('user new access token', user);
  sessionStorage.setItem('accessToken', JSON.stringify(user));
};
const getAccessToken = () => JSON.parse(sessionStorage.getItem('accessToken') || '{}');
const getRefreshToken = () => JSON.parse(sessionStorage.getItem('RefreshToken') || '{}');
const setUserImage = (image: string) => {
  sessionStorage.setItem('userImg', JSON.stringify(image));
};
const getUserImage = () => JSON.parse(sessionStorage.getItem('userImg') || '{}');

const TokenService = {
  setSignupUser,
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  UpdateAccessToken,
  setUserImage,
  getUserImage
};
export default TokenService;
