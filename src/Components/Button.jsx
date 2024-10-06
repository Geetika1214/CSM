import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, path, color = 'primary', size = 'medium', icon }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) navigate(path);
  };

  // Define size and color classes
  const sizes = {
    small: 'py-2 px-4 text-base',
    medium: 'py-3 px-6 text-lg',
    large: 'py-4 px-8 text-xl',
  };

  const colors = {
    primary: 'bg-gradient-to-r from-slate-700 to-slate-600',
    secondary: 'bg-gradient-to-r from-gray-400 to-gray-300',
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center w-full text-white rounded-lg 
        ${colors[color]} ${sizes[size]} 
        transition-transform duration-300 ease-in-out transform hover:shadow-lg 
        hover:scale-105 active:scale-95 focus:outline-none 
        focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50`}
    >
      {text}
      <FaArrowRight className="ml-2" />
    </button>
  );
};

export default Button;
