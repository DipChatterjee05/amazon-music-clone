import React from 'react';
import "./SignUp.css";

function SignIn() {
  return (
    <form action="" className='sign-in'>
    <h2>Sign In</h2>
        <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name='email' id='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name='password' id='password' placeholder='At least 6 characters'/>
        </div>
        <div>
            <input type="submit" value="Sign In" className='submit-button' />
        </div>
    </form>
  )
}

export default SignIn;