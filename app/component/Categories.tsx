import React from 'react';
import { categories } from '../api/api';
const Categories = () => {
  return (
    <div className='maw-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-pink-600 font-bold text-2xl py-2 text-center'>
        Trending Categories
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className='bg-white rounded-md shadow-md p-4 flex hover:scale-105 duration-300 justify-center'
            >
              <img
                className='object-cover  rounded-xl w-40 h-10 cursor-pointer shadow-xl '
                src={item.image}
                alt={item.name}
              />
              <h1 className='text-pink-600 font-bold text-2xl py-2 text-center'>
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
