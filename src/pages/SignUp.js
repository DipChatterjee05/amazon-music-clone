import React, { useRef } from "react";
import "./SignUp.css";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit =(()=>{
    
  })

  return (
    <form action="" className="sign-up" onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and last name"
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="At least 6 characters"
          ref={passwordRef}
        />
      </div>
      <div>
        <input type="submit" value="Sign Up" className="submit-button" />
      </div>
    </form>
  );
}

export default SignUp;
