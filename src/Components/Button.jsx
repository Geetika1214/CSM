import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Button = ({ text, path }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <button
      type='button' // Use type='button' to prevent form submission
      onClick={handleClick} // Call the handleClick function on button click
      className='flex items-center justify-center w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-2 px-4 rounded-lg 
      transition-all duration-300 ease-in-out transform hover:shadow-lg 
      hover:scale-105 active:scale-95 active:bg-slate-700 focus:outline-none 
      focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50'
    >
      {text}
      <FaArrowRight className="ml-2" /> {/* Add icon */}
    </button>
  );
};

export default Button;
