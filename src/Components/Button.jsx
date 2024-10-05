import React from 'react'

const Button = ({ text }) => {
  return (
    <button
    type='submit'
    className='w-full bg-slate-700 text-white py-2 px-4 rounded-lg
    hover:bg-blue-700 transition duration-300 ease-in-out'
    >{text}
    </button>
  )
}

export default Button;