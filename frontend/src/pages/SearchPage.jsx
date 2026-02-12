import React from "react";
import SearchInput from "../components/SearchInput";

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 flex flex-col items-center justify-start pt-32 px-4 text-center">
      <div className="mb-8">
        <h1 className="logo text-5xl font-bold text-white mb-4 tracking-tight">
          MedGuide
        </h1>

        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Smarter navigation of arboviral clinical protocols.
        </p>
      </div>

      <SearchInput />
    </div>
  );
};

export default SearchPage;
