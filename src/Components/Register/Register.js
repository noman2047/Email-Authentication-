import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Register.css'
import {getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import app from '../../Firebase/firebase.init';

const auth=getAuth(app)


const Register = () => {
  const [success,setSuccess]=useState(false);
  const [clearn,setClean]=useState('');
  const [wrong,setWrong]=useState(false);
  const [getEmail,setGetEmail]=useState('')

  const takeRegisterData = item =>{
    setSuccess(false)
    setWrong(false)
    item.preventDefault();
    const email=item.target.email.value;
    setGetEmail(email);
    const password=item.target.password.value;
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setSuccess(true)
      item.target.reset();
    })
    .catch(error=>{
      console.log("Error",error);
      setWrong(true);
    })
    console.log(email,password);
  }
  const forResetPassword = () =>{
    {
      getEmail || alert("Please Give Email")
    }
    sendPasswordResetEmail(auth,getEmail)
    .then(()=>{
      alert("Please Reset your password.")
    })
  }
  return (
    <div className='mx-auto w-50'>
      <h4 className='text-primary'>Please Login!!!</h4>
      <Form onSubmit={takeRegisterData}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Email">Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Password">Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
        </Form.Group>
        {
          success && <p>Your Account Match</p>
        }
        {
          wrong && <p>Wrong</p>
        }
        <Button type="submit">Log in</Button>
        <p><small>No Account ,Please Create A Account,<Link to='/register'>Register</Link></small></p>
        <p>Yor Forgaten Password ,Don't Worry,<Button variant="dark" onClick={forResetPassword}>Click</Button> here for new Passowrd.</p>
      </fieldset>
    </Form>
    </div>
  );
};

export default Register;