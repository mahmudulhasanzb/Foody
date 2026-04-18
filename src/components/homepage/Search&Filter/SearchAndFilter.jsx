import React from 'react';

const SearchAndFilter = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-3 bg-base-200 p-3 rounded-2xl shadow-lg">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search foods... (e.g. burger, pizza)"
          className="input input-bordered w-full flex-1 rounded-xl"
        />

        {/* Search Button */}
        <button className="btn btn-warning rounded-xl px-6">
          Search
        </button>

        {/* Category Dropdown */}
        <select className="select select-bordered rounded-xl w-full md:w-56">
          <option>All Categories</option>
          <option>Burger</option>
          <option>Pizza</option>
          <option>Drinks</option>
          <option>Dessert</option>
        </select>
      </div>
    </div>
  );
}


export default SearchAndFilter;
