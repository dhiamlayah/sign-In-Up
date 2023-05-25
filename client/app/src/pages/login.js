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
            </div>

        )
    }
}



export default Login ;