import React from "react";
import "./signup.style.css";
import CustomButton from "../../components/button/customButton";

const SignUp = () => {
  return (
      <div className="signup">
          <div className="signup-card">
              <div className="card-head">
                  <h1>Sign up</h1>
                  <p>Already have an account? <span className='make-blue'>Sign in</span></p>
              </div>
              <form action="">
                  <label htmlFor="signup_mail" className='form-input'>
                      Email
                      <input type="email" id='signup_mail' name='signup_mail'/>
                  </label>
                  <label htmlFor="signup_mail" className='form-input'>
                      Password
                      <input type="password" id='pass' name='pass'/>
                  </label>
                  <div className="submit">
                      <CustomButton button_type='submit' text='Submit' />
                  </div>
              </form>
              <div className="or">
                  <div className="h-line"/>
                  <p>Or</p>
                  <div className="h-line"/>
              </div>
              <CustomButton button_type='google' text='Sign up with Google'/>
          </div>
      </div>
  )
};
export default SignUp;