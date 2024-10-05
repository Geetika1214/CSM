import React, { useState } from "react";
import { FaSignOutAlt, FaBars, FaHome, FaUserAlt, FaCogs } from "react-icons/fa";

const Toolbar = ({ currentTab, onTabClick }) => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default for mobile view

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "Profile", icon: <FaUserAlt />, path: "/profile" },
    { name: "Settings", icon: <FaCogs />, path: "/settings" },
  ];

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden md:w-64`}>
      {/* CSM Logo */}
      <div className="flex items-center justify-center py-6 bg-gray-400 mb-6">
        <h2 className="text-3xl font-bold">CSM</h2>
      </div>

      {/* Navigation Items */}
      <ul className="space-y-4 px-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-700 ${currentTab === item.name ? 'bg-gray-700' : ''}`}
            onClick={() => onTabClick(item.path)}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Sign Out */}
      <div className="absolute bottom-8 w-full px-4">
        <button className="flex items-center w-auto space-x-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="text-gray-900 absolute top-4 left-4 z-50 md:hidden focus:outline-none"
      >
        <FaBars className="text-3xl" />
      </button>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

    </div>
  );
};

export default Toolbar;
