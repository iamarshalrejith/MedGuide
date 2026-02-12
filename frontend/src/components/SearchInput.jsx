import React from "react";

const SearchInput = () => {
  return (
    <div className="w-full max-w-3xl">
      
      <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 px-3 py-1.5 transition-all duration-300 focus-within:shadow-lg focus-within:border-gray-300">

        <input
          type="text"
          placeholder="Search WHO arboviral guidance..."
          className="flex-1 bg-transparent px-3 py-2 text-gray-700 text-base outline-none placeholder-gray-400"
        />

        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-all duration-200">
          Search
        </button>

      </div>

      <p className="text-sm text-gray-500 mt-5 text-center">
        Evidence-based • WHO-aligned • Explainable AI
      </p>

    </div>
  );
};

export default SearchInput;
