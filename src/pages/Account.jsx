import React from "react";
import Toolbar from "../Components/Toolbar";
export const Account = () => {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[1200px] min-h-[800px] bg-neutral-50 flex">
    	  <Toolbar/>
    	  
    	  <main className="flex-1 p-10">

    	    <h1 className="font-title font-bold  text-blue-900 text-xl text-center">Account</h1>
    	    <p className="text-center text-green-600 font-semibold m-4">Update your profile</p>
    	    
    	    <div className="mt-10 mx-auto w-[600px] bg-neutral-100 p-6 rounded-lg shadow">
    	      <label className="block text-sm font-semibold">NAME</label>
    	      <div className="flex items-center mt-2 border border-neutral-200 rounded-md bg-white overflow-hidden">
    	        <input
    	          type="text"
    	          className="w-full py-2 px-4"
    	          placeholder="Full Name"
    	        />
    	        <span className="p-2">
    	          <i className="material-symbols-outlined">edit</i>
    	        </span>
    	      </div>

    	      <div className="flex justify-end mt-4">
    	        <button className="px-6 py-2 bg-slate-700 text-white rounded-md shadow-md">Save</button>
    	      </div>
              
    	    </div>
    	  </main>
    	</div> 
    </div>
  )
}

export default Account;