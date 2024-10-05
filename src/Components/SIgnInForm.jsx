import React from 'react';
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';

const SignInForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-700">Sign In</h2>

        {/* Email Input */}
        <InputField 
          type="email" 
          placeholder="example@gmail.com" 
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        {/* Password Input */}
        <InputField  
          type="password" 
          placeholder="Enter Password" 
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            {/* Remember Me Checkbox */}
            <Checkbox label="Remember Me" />
          </div>
          <a href="/forgotpassword" className="text-red-500 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <Button text="Login" path="/"/>

        <p className="text-center text-gray-600">
          New User?{' '}
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
