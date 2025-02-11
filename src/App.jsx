import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
const App=()=>{

const name=" "
// const isloggedin=false


// let isloding=true

// function loading(){
//   return  setTimeout(()=>{
//     isloding=false
//    },2000)
 
// }
// console.log(loading())

// const fetchdata=()=>{
//   fetch("https://fakestoreapi.com/products")
//   .then((res)=>res.json())
//   .then((data)=>{
//     return data
//   })
// }
// const products=fetchdata()
// console.log("products",products)

// it returns undefined
// in function based components are called stateless componets



  return (
    <>
    <h1>{name?name:"network issue"}</h1>
    {isloggedin?"loginsuccess":"please log in"}

     {/* {name?<Table></Table>:"Loading....."} */}
    
    {isloding?  <div className='loader'>
      </div>:<Table></Table>}

      {}
    </>
  )
}

export default App
