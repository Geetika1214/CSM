import React from 'react';
import InputField from './InputField';
import Button from './Button';
const EmailVerificationForm = () => {
  return (
    <form >
      <div className="mb-4 p-4">
        <InputField type="text" placeholder="Enter Verification Code"/>
      </div>

      <Button text="Submit" path="/"/>
    </form>
  );
};

export default EmailVerificationForm;
