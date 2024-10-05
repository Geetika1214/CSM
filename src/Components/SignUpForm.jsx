import React from 'react';
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';

const SignUpForm = () => {
  return (
    <form className="space-y-4">
      {/* Username Input */}
      <InputField  type="text" placeholder="Username" />

      {/* Email Input */}
      <InputField  type="email" placeholder="example@gmail.com" />

      {/* Password Input */}
      <InputField  type="password" placeholder="Password" />

      {/* Confirm Password Input */}
      <InputField  type="password" placeholder="Confirm Password" />

      {/* Checkbox */}
      <Checkbox label="Agree to Our terms and Conditions" />

      {/* Submit Button */}
      <Button text="Continue" />

      {/* Already registered */}
      <p className="text-center mt-4 text-blue-900 font-semibold">
        Already registered?{' '}
        <a href="/signin" className="text-blue-900 font-semibold hover:underline">
          Sign In
        </a>
      </p>

    </form>
  );
};

export default SignUpForm;
