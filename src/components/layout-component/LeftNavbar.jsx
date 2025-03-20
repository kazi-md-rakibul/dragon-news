import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-6 text-zinc-900">
        All Categories ({categories.length})
      </h2>
      
      <div className="flex flex-col space-y-1">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="px-4 py-3 text-sm font-medium text-zinc-600 rounded-lg transition-all duration-200 hover:bg-zinc-50 hover:text-zinc-900 hover:translate-x-1 relative group" 
            key={category.category_id}
          > 
            <span className="relative z-10">{category.category_name}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"/>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;