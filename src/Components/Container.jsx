import React from 'react';

const Container = ({ children, height, width }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white p-8 rounded-lg  shadow-lg"
        style={{ width: width, height: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
