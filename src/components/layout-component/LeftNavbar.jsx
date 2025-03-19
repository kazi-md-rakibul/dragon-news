import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data.data.news_category));
  },[]);
  return (
    <div>
        <h2 className='font-semibold mb-3'>All Category ({categories.length}) </h2>
        <div className='flex flex-col gap-1'>
          {
            categories.map((category) => (
            <NavLink
              to={`/category/${category.category_id}`}
              className="btn border-none font-medium text-gray-700 py-6 px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:translate-x-2 hover:shadow-md flex items-center group relative overflow-hidden" 
              key={category.category_id}
            > 
              <span className="relative z-10">{category.category_name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </NavLink>
          ))}
        </div>
    </div>
  );
};

export default LeftNavbar;