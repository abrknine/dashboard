import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <FaSearch className="text-gray-400 mr-3" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" 
      />
    </div>
  );
};

export default SearchBar;
