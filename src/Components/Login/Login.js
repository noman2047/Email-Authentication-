import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {sendEmailVerification } from "firebase/auth";
import {createUserWithEmailAndPassword, getAuth,updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth=getAuth(app);

const Login = () => {
  const [errorMessage,setErrorMessage]=useState('')
  const [sucess,setSucess]=useState(false)

  const takeDataFromform = event =>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    const name=event.target.name.value;
    setSucess(false)
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
       setErrorMessage('Give At least 2 Capital Char.');
       return;
    }
    if(password.length<6){
      setErrorMessage("Give At Least 6 Char.");
      return;
    }
    if(!/(?=.*[!@#$&*])/.test(password)){
      setErrorMessage("At least give any spacial char (!@#$&*)");
      return;
    }
    setErrorMessage('')

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setSucess(true);
      event.target.reset();
      emailVarification();
      updateProfiles(name);
    })
    .catch(error=>{
      console.log('error',error);
      setErrorMessage(error.message);
    })  
  }
  const emailVarification = () =>{ 
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      alert("Please Verify your Email.")
    })
  }
  const updateProfiles = (name) =>{
    updateProfile(auth.currentUser,{
      displayName:name
    })
  }
  return (
    <div className='mx-auto w-50'>
       <h4 className='text-primary'>Please Registration!!!</h4>
      <Form onSubmit={takeDataFromform}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Your email" required />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="Name">Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <p>{errorMessage}</p>
      {
        sucess && <p className='text-success'>Sucessfuly create Your Account.</p>
      }
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p><small>Create Account ,<Link to='/'>Log in</Link></small></p>
    </Form>
    </div>
  );
};

export default Login;