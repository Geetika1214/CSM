import React, { useState } from "react";
import { FaSignOutAlt, FaBars, FaHome, FaUserAlt, FaCogs, FaFolder } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import Link for navigation and useLocation for current path
import CSMLogo from "./CSMLogo";
const Toolbar = () => {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default for larger viewports

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Profile", icon: <FaUserAlt />, path: "/profile" },
    { name: "Account", icon: <FaCogs />, path: "/account" },
    { name: "Project", icon: <FaFolder />, path: "/project" },

  ];

  return (
    <div className="relative">
      {/* Toggle Button - always visible */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 absolute top-4 left-4 z-50 focus:outline-none"
        style={{ zIndex: 1000 }}  // Ensures it's always on top
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 h-screen bg-gray-100 text-gray-800 transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100 w-64" : "-translate-x-full opacity-0"
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }} // Disables interaction when closed
      >
        
        <CSMLogo />

        {/* Navigation Items */}
        <ul className="space-y-4 px-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-300
                ${location.pathname === item.path ? "bg-gray-300" : "hover:bg-gray-200"}
              `}
            >
              <Link
                to={item.path} // Link to the corresponding path
                className="flex items-center space-x-4 w-full"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign Out */}
        <div className="absolute bottom-8 w-full px-4">
          <button className="flex items-center w-auto space-x-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white">
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

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
