import React, { Component } from 'react';
import './login.css'
class Login extends Component {

    render(){
        return(
            <div className='Login'>
            <h1>Sign In</h1>
            <label for='email'> Email </label>
             <input type="email" id='email'/>
 
             <label for='password'> Password </label>
             <input type="password" id='password'/>
 
             <input type='submit' className='submit'/>
             <h3> haven't an account yet ? <a href='/'>Register</a> </h3>
              <figure aria-hidden="true">
    <div class="person-body"></div>
    <div class="neck skin"></div>
    <div class="head skin">
      <div class="eyes"></div>
      <div class="mouth"></div>
    </div>
    <div class="hair"></div>
    <div class="ears"></div>
    <div class="shirt-1"></div>
    <div class="shirt-2"></div>
  </figure>
         </div>

        )
    }
}



export default Login ;