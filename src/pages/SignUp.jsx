import React from 'react';
import Container from '../Components/Container';
import SignUpForm from '../Components/SignUpForm';

const SignUpPage = () => {
  return (
    <Container height="520px" width="420px">
      <h2 className="text-2xl font-bold text-center mb-6">Sign up</h2>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
