import React from "react";
import { useState } from "react";
const SingleStatefile = () => {
  const [hide, sethide] = useState(false)
  const [input, setinput] = useState({
    username: "",
    password: "",
    email: "",
    city: "",
    address: "",
  });
  const [error, seterror] = useState({
    username: false,
    password: false,
    email: false,
    city: false,
    address: false,
  });
  console.log(error);

  console.log(input);
  function getdata(event) {
    let names = event.target.name;
    console.log(names);
    let values = event.target.value;
    console.log(values);
    setinput({ ...input, [names]: values });
    seterror({...error, [names]:false})
  }
  console.log("complete");
  
  function checkdata(params) {
    if (input.username=="") {
      seterror({...error,username:true})
    }
    else if(input.password==""){
      seterror({...error,password:true})
    }
    else if(input.email==""){
      seterror({...error,email:true})
    }
    else if(input.city==""){
      seterror({...error,city:true})
    }
    else if(input.address==""){
      seterror({...error,address:true})
    }
    else{
      sethide(true)
    }
  }
  return (
    <>
      <h1>Username</h1>
      <input type="text" name="username" onChange={getdata} />
      {error.username && <p>Please Enter the Username</p>} <h1>Password</h1>
      <input type="text" name="password" onChange={getdata} />
      {error.password && <p>Please Enter the Password</p>}
      <h1>email</h1>
      <input type="text" name="email" onChange={getdata} />
      {error.email && <p>Please Enter the Email</p>}
      <h1>city</h1>
      <input type="text" name="city" onChange={getdata} />
      {error.city && <p>Please Enter the city</p>}
      <h1>Address</h1>
      <input type="text" name="address" onChange={getdata} />
      {error.address && <p>Please Enter the Address</p>}
      <br />
      <button onClick={checkdata}>Submit</button>
      <h1>Profile</h1>
     {hide && 
      <div className="gorms">
      <div className="profile">
        <h3>User Name:</h3>
        <h3>Email:</h3>
        <h3>City:"</h3>
        <h3>Address:</h3>
      </div>
      <div className="profile">
        <h3>{input.username}</h3>
        <h3>{input.email}</h3>
        <h3>{input.city}</h3>
        <h3>{input.address}</h3>
        <h3>{input.password}</h3>
      </div>
    </div>}
    </>
  );
};

export default SingleStatefile;
