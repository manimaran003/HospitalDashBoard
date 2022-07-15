export const getStorageDetail=()=>{
    let userData=localStorage.getItem("signup")
    if(userData){
        return JSON.parse(userData).length>0?true:false
    }
}