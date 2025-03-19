import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegClock } from 'react-icons/fa';

const NewsCard = ({news}) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 mb-16 overflow-hidden border border-gray-100">
      {/* Author Info */}
      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 h-12 ring-2 ring-offset-2 ring-blue-400 rounded-full">
              <img src={author?.img} className="hover:scale-105 transition-all duration-300" alt="" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              {author?.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegClock className="text-blue-400" />
              <p>{author?.published_date}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <FaRegBookmark className="text-xl cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <FaShareAlt className="text-xl cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        </div>
      </div>

      {/* News Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-blue-500 cursor-pointer transition-colors duration-300">
          {title}
        </h2>
        <div className="relative overflow-hidden rounded-xl mb-4 group">
          <img 
            src={image_url} 
            alt={title} 
            className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
        </p>
        <button className="btn btn-ghost border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 px-6 font-semibold hover:-translate-y-0.5 hover:shadow-lg">
          Read More
        </button>
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between items-center px-6 py-4 border-t bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-yellow-700">{rating?.number}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
          <FaEye className="text-blue-500" />
          <span className="font-semibold text-blue-700">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;