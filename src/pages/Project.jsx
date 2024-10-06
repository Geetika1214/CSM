import React from "react";
import { FaPlus, FaFolder } from "react-icons/fa"; // Importing the FaPlus and FaFolder icons
import { Link } from "react-router-dom"; // Import Link for navigation
import Toolbar from "../Components/Toolbar";
import Button from "../Components/Button";
export const Project = () => {
  return (
    <div id="webcrumbs" className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 p-6 shadow-lg">
        <Toolbar className="h-full bg-gray-200" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-title text-3xl font-semibold text-gray-800 mb-6">
            <FaFolder className="inline mr-2 text-slate-600" /> Projects
          </h1>

          {/* Project List */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">My Projects</h2>
            <div className="flex flex-col gap-4">
              <Link to="/project/1" className="border border-gray-200 bg-white p-4 rounded-md shadow-sm transition-transform duration-200 hover:scale-105 flex items-center">
                <span className="font-medium">Project Name 1</span>
              </Link>
              <Link to="/project/2" className="border border-gray-200 bg-white p-4 rounded-md shadow-sm transition-transform duration-200 hover:scale-105 flex items-center">
                <span className="font-medium">Project Name 2</span>
              </Link>
              <Link to="/project/3" className="border border-gray-200 bg-white p-4 rounded-md shadow-sm transition-transform duration-200 hover:scale-105 flex items-center">
                <span className="font-medium">Project Name 3</span>
              </Link>
            </div>
          </div>

          {/* Add Project Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-slate-700 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 shadow-md hover:bg-blue-700 transition duration-200">
              Add New Project
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
