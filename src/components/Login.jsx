import React,{useState} from "react";
import {  useNavigate } from "react-router";

function Login(){

  const[details,setDetails]=useState({
    username:"",
    password:""
  })

  
  const navigate = useNavigate();

  function handleChange(event){
    const{name,value}=event.target;
    setDetails(prevDetails=>{
      return{
      ...prevDetails,
      [name]:value
      }
    })
  }

  async function handleClick(event){
    event.preventDefault();
    console.log(details);
    
    const loginuser={...details}
    
    
    // This will send a post request to update the data in the database.
    await fetch("http://localhost:4000/", {
      method: "POST",
      body: JSON.stringify(loginuser),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }


    return(
      
<div class="container mt-5">
  <h1>Login</h1>

  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

          {/* Makes POST request to /login route  */}
          <form action="/login" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username" onChange={handleChange} value={details.username}/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" onChange={handleChange} value={details.password}/>
            </div>
            <button type="submit" class="btn btn-dark" onClick={handleClick}>Login</button>
          </form>

        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign In with Google
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
            <i class="fab fa-facebook"></i>
            Sign In with Facebook
          </a>
        </div>
      </div>
    </div>

  </div>
</div>  
    )
}

export default Login;