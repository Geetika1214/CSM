import React from 'react';
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-slate-700">Sign Up</h2>

        {/* Username Input */}
        <InputField
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        {/* Email Input */}
        <InputField
          type="email"
          placeholder="example@gmail.com"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        {/* Password Input */}
        <InputField
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        {/* Confirm Password Input */}
        <InputField
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        {/* Checkbox */}
        <div className="flex items-center">
          <Checkbox label="Agree to Our terms and Conditions" />
        </div>

        {/* Submit Button */}
        <Button text="Continue" path="/emailverification" />

        {/* Already registered */}
        <p className="text-center text-gray-600">
          Already registered?{' '}
          <a href="/signin" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
