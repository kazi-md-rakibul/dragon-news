import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

  const {data: news} = useLoaderData();
  console.log(news)

  return (
    <div>
      <h2 className='font-semibold mb-3 text-center'>Dragon News Home</h2>
      <p className='text-gray-500 text-sm'> ({news.length}) News found in this category </p>
      <div>
        {
          news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;