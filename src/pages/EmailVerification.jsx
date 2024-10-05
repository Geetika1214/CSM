import React from 'react'
import Container from '../Components/Container';
import EmailVerificationForm from '../Components/EmailVerificationForm';

const EmailVerification = () => {

  return (
    
    <Container height="400x" width="380px">
        <h2 className="text-2xl font-bold text-center mb-6">Email Verification</h2>

        <p className="text-center mb-4">
          We’ve sent you a verification code to your email
        </p>

        <EmailVerificationForm />
    </Container>
  );
};

export default EmailVerification;