import React , {useRef, useState} from 'react'
import "./Log.css"

export default function Log(props) {

    let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = (e) => {
    e.preventDefault();
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const email = useRef();
  const password = useRef();

  const goToApp = (e) => {
    e.preventDefault();

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    let getEmail = localStorage.getItem("email");
    let getPassword = localStorage.getItem("password");
    
    if(userEmail !== "" && userPassword !== ""){
      if(getEmail === "" || getPassword === ""){
        alert("Please Register Again!")
      }
    }

   else if (userEmail === "" || userPassword=== "" ) {
      alert("Please Fill Date");
  } 

  if(
       getEmail === userEmail && getPassword === userPassword){

      setTimeout(()=> {
          window.location = "index";
      }, 1500);
      
  }
  
  else {
              alert("Email OR Password Isn't Correct");
          }


  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={goToApp}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                ref={email}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                ref={password}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  const goToLogin = (e) =>{
    e.preventDefault();
let username = document.querySelector("#user-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

if (username.value==="" || email.value==="" || password.value===""){
  alert("Please Fill Date");
}
else{
  localStorage.setItem("username" , username.value);
  localStorage.setItem("email" , email.value);
  localStorage.setItem("password" , password.value);

  setTimeout(()=> {
      window.location = "/log";
  }, 1500);

}
}

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={goToLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              id='user-name'
              type="text"
              className="form-control mt-1"
              placeholder="e.g Youssef Mohammed"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id='email'
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id='password'
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}