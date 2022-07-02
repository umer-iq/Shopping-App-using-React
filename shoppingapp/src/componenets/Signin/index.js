
import  Button  from '../forms/button'
import './styles.scss'
import { logout, signInWithGoogle } from '../../firebase/utils'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'
import Register from './register/Register'
import Reset from './reset/Reset'

export default class Signin extends Component {
  
    handleSubmit = async e => {
        e.preventDefault();
    }
  
    render() {
    return (
        <div className='signin'>
        <div className='wrap'>
            <h2>Login</h2>
        </div>
        <div className='formwrap'>
            <form onSubmit={this.handleSubmit}>
            
                <div className='socialSignin'>
                    <div className='row'>
                <Button onClick={signInWithGoogle}>Sign in with Google </Button>
                        <Button  onClick={logout} >Log out</Button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
  }
}





