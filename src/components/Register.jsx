import React,{useState} from "react";

function Register(){
  
  const[detail,setDetail]=useState({
    userName:"",
    userPassword:""
  })

  function handleChanges(event){
    const{name,value}=event.target;
    setDetail(prevDetail=>{
      return{
      ...prevDetail,
      [name]:value
      }
    })
  }

  function handleClicking(event){
    event.preventDefault();
    console.log(detail);
  }

    return(
        <div className="container mt-5">
        <h1>Register</h1>
      
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
      
                {/* Makes POST request to /register route  */}
                <form action="/register" method="POST">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="userName" onChange={handleChanges} value={detail.userName}/>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="userPassword" onChange={handleChanges} value={detail.userPassword}/>
                  </div>
                  <button type="submit" className="btn btn-dark" onClick={handleClicking}>Register</button>
                </form>
      
              </div>
            </div>
          </div>
      
          <div className="col-sm-4">
            <div className="card social-block">
              <div className="card-body">
                <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                  <i className="fab fa-google"></i>
                  Sign Up with Google
                </a>
              </div>
            </div>
            <div className="card social-block">
              <div className="card-body">
                <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
                  <i className="fab fa-facebook"></i>
                  Sign In with Facebook
                </a>
              </div>
            </div>
          </div>
      
        </div>
      </div>  
    )
}

export default Register;