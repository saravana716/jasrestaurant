import React from 'react'
import "./Navbar.css"
import { useDispatch } from 'react-redux'
import logo from "../../Assets/Poke DEMO/poke-logo-300x30.png"
import { myreduser } from '../../Store/Store'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const selector=useSelector(function (data) {
    return data.mobiledata
  })
  console.log(selector);
  
 const dispatch=useDispatch()

 function changedata(params) {
  dispatch(myreduser.mylogin())
 }
 function filterdatas(params) {
  let result=selector.filter(function (event) {
    return event.price>="799 USD"
  })
  console.log(result);
  dispatch(myreduser.filtermobiledata(result))
  
 }
  return (
    <>
    <div className='container11'>
        <img src={logo} alt="" className='img'/>
        <div className='container12'>
          
        <ul>
            <li style={{cursor:"pointer"}}>Home</li>
            <li style={{cursor:"pointer"}}>About</li>
            <li style={{cursor:"pointer"}}>Services</li>
            <li style={{cursor:"pointer"}}>Prices</li>
            <li style={{cursor:"pointer"}}>Shop</li>
            <li style={{cursor:"pointer"}}>Blog</li>
            <li style={{cursor:"pointer"}}>Contact</li>
        </ul>
        <button onClick={changedata}>Book Now</button>
    
        </div>
      </div>
      <button onClick={filterdatas}>filterdata</button>
      {selector.map(function (data) {
        return(
          <div className='boxes'>
        <h1>{data.brand}</h1>
        <h1>{data.model}</h1>
        <h1>{data.processor}</h1>
        <h1>{data.price}</h1>
        <h1>{data.os}</h1>
        <h1>{data.ram}</h1>
        <h1>{data.camera.front}</h1>
        <h1>{data.camera.rear}</h1>
      </div>
        )
        
      })}
    </>
  )
}

export default Navbar