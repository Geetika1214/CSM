import React from 'react';
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';

const SignInForm = () => {
  return (
    <form className="space-y-3" >

        {/* Email Input */}
        <InputField 
            type="email" 
            placeholder="example@gmail.com" 
        />

        {/* Password Input */}
        <InputField  
            type="password" 
            placeholder="Enter Password" 
        />

        <div className="flex justify-between mt-6 mb-0">
            <div></div> 
            <a href="/forgotpassword" className="text-red-500 hover:underline">
              Forgot Password?
            </a>
        </div>
          
          <Checkbox label="Remember Me" />

          <Button text="Login"/>

         <p className="text-center  text-blue-900 font-semibold">
            New User?{' '}
            <a href="/signup" className="text-blue-900 font-semibold hover:underline">
            SignUp
            </a>
         </p>

        </form>
  );
};

export default SignInForm;
