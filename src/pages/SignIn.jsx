import React from 'react';
import Container from '../Components/Container';
import SignInForm from '../Components/SIgnInForm';

const SignIn = () => {
  
  return (
    <Container height="440px" width="420px" >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <SignInForm/>
    </Container>
  );
};

export default SignIn;
