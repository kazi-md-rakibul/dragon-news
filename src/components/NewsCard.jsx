import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

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
    <div className="card bg-base-100 shadow-xl mb-16">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <img src={author?.img} className="w-12 h-12 rounded-full" alt="" />
          <div>
            <h3 className="font-bold">{author?.name}</h3>
            <p className="text-gray-600 text-sm">{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaRegBookmark className="text-2xl cursor-pointer" />
          <FaShareAlt className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* News Content */}
      <div className="p-4">
        <h2 className="card-title mb-4">{title}</h2>
        <img src={image_url} alt={title} className="w-full rounded-lg mb-4" />
        <p className="text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
        </p>
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span>{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;