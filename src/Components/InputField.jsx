const InputField = ({ label, type, placeholder }) => {
    return (
      <div>
        <label className="block text-sm text-gray-700">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
    );
  };
  
  export default InputField;
  