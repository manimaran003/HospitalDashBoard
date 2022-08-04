import React,{useState} from 'react'
const PaginationHook=(data:any,PerPage:number)=>{
    console.log(data,PerPage)
    const [currentPage,setCurrentPage]=useState(1)
    const MaxPage=Math.ceil(data?.length/PerPage)
    function next(){
        setCurrentPage((currentNo:number)=>Math.min(currentNo+1,MaxPage))
    }
    function prev(){
        setCurrentPage((currentNo:number)=>Math.max(currentNo-1,MaxPage))
    }
    function jump(page:number){
        const pageNumber=Math.max(1,page)
        console.log(pageNumber)
        setCurrentPage(()=>Math.min(pageNumber,MaxPage))
    }
    function currentData(){
        const begin=(currentPage-1)*PerPage
        const end=begin+PerPage;
        console.log(data.slice(begin,end))
        return data.slice(begin,end)
    }
    return {next,prev,jump,MaxPage,currentData,currentPage}
}
export default PaginationHook