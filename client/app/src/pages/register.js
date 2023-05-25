import React, { Component } from 'react';
import './Register.css'
class Register extends Component {
 

  render(){
    return (
        <div className='Register'>
           <h1>REGISTER NOW</h1>
            <label for='name'>First Name </label>
            <input type="text" id='name'/>

            <label for='lastName'>Last Name </label>
            <input type="text" id='lastName'/>

            <label for='email'> Email </label>
            <input type="email" id='email'/>

            <label for='password'> Password </label>
            <input type="password" id='password'/>

            <input type='submit' className='submit'/>
            <h3>Already have an account <a href='/login'>Sign-In</a> ?</h3>
        </div>
    )
  }   
}

export default Register ;