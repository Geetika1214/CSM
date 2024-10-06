import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../Components/Toolbar"; // Import the Toolbar component

export const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from URL
  const [description, setDescription] = useState(""); // State to manage project description

  return (
    <div id="webcrumbs" className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 p-6 shadow-lg">
        <Toolbar className="h-full bg-gray-200" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Project Name Heading */}
          <h1 className="font-title text-3xl font-semibold text-gray-800 mb-4">
            Project Name {id}
          </h1>

          {/* Project Description Input */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description here..."
              className="border border-gray-300 rounded-md w-full p-2"
              rows={4}
            />
          </div>

          {/* Workspace Container */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-semibold text-gray-700 mb-2">Workspace</h2>
            <p className="text-gray-600">
              This area can be used to display project-related files, notes, or
              other relevant information.
            </p>
            {/* You can add more features here, like file listings or project notes */}
          </div>

          {/* Upload and Download Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200">
              Upload Files
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-200">
              Download Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
