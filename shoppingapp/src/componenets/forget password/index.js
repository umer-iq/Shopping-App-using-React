import React, { Component } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { useHistory, Link } from 'react-router-dom';
//import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from '..//Authwrapper/AuthWrapper';
import FormInput from '..//forms/formsinput/FormInput';
import Button from '../forms/button';
import { async } from '@firebase/util';

import { auth } from '../../firebase/utils';
import { sendPasswordResetEmail,} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const intialStatee ={email:''}
export class EmailPassword extends Component {
    constructor(props){
    super(props);
    this.state ={
        ...intialStatee
    }
    this.handleChange = this.handleChange.bind(this);
}
handleChange(e){
    const {name,value} = e.target;
    this.setState({[name]:value})
}
handleSubmit = async(e)=>{
e.preventDefault();
try {
  const {email} = this.state;
  const config = {
    url:'http://localhost:3000/login'
  }
  await sendPasswordResetEmail(auth,email,config)
  
  .then(()=>{

    alert("Password reset link sent!");
    this.props.useNavigate.push('/login')
  })
  .catch(()=>{
    console.log('Not working')
  })
} catch (error) {
  
}
}
  render() {
    const configureAuthWrapper ={
        headline:'Email password'
    }
    const {email} = this.state
    return (
    <AuthWrapper {...configureAuthWrapper}>
    
        <div className='formWrap'>
            <form onSubmit={this.handleSubmit}>
<FormInput type='email' name ='email' value={email} placeholder="Enter email to reset password..."
    onChange={this.handleChange}
/>
<Button type="submit">
            Submit
          </Button>
         
        
          
            </form>
        </div>
     
     </AuthWrapper>
    )
  }
}

export default EmailPassword
