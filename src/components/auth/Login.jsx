import React, { useState } from 'react';
import Modal from '../UI/Modal.jsx'; // Assuming the Modal component is in the same import React, { useState } from 'react';
import Button from '../UI/Button.jsx';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import './Auth.css';
const LoginPage = ({ onClose,isloginOpen}) => {
  const [loginIn, setLoginIn] = useState(true);

  const handleLoginClick = () => {
    setLoginIn(true);
    console.log("is  loging form this working");
  };

  const handleSignUpClick = () => {
    setLoginIn(false); 
    console.log("is sign up form working");// Set loginIn state to false to display the SignUp component
  };

 

  return (
   <Modal className="cart"   open={isloginOpen} >
   <div className="auth-modal">
   <h2 >{loginIn?"Login":"Signup"}</h2>
    {loginIn ? <LoginForm /> : <SignUpForm />}
    
   <Button textOnly 
	   className="auth-modal-close-button" 
	   onClick={onClose}> X</Button>
    
    <div  className="auth-loginswitch">
    <p> Not a member?
    {loginIn?<Button textOnly className="authbutton" onClick={handleSignUpClick}>Sign up</Button>
    :
    <Button textOnly  className="authbutton" onClick={handleLoginClick}>Login</Button>
    } </p>
    
    </div>
   </div>
  </Modal>
  );
};

export default LoginPage;

