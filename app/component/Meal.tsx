'use client';
import React, { useState } from 'react';
import { mealData, topPicks } from '../api/api';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  return (
    <div className='max-w-[1520px] mx-auto px-4 py-12'>
      <h1 className='text-pink-600 font-bold text-2xl text-center py-2'>
        Our Meal
      </h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex gap-2 justify-center md:justify-center'>
          <button className='m-1 hover:border-pink-600 border-pink-600 text-black hover:text-pink-600 hover:bg-slate-300 bg-pink-600'>
            All
          </button>
          <button className='hover:border-pink-600 m-1 hover:text-pink-600 border-pink-600 text-black hover:bg-slate-300 bg-pink-600'>
            Pizza
          </button>
          <button className='hover:border-pink-600 m-1 border-pink-600 hover:text-pink-600 text-black hover:bg-slate-300 bg-pink-600'>
            Chiken
          </button>
          <button className='hover:border-pink-500 m-1 hover:text-pink-600 border-pink-600 text-black hover:bg-slate-300 bg-pink-600'>
            Salad
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {topPicks.map((item) => (
          <div
            key={item.id}
            className='border-none hover:scale-105 duration-300'
          >
            <img
              src={item.img}
              alt={item.title}
              className=' w-full h-[200px] object-cover rounded-lg'
            />
            <div className=' flex justify-between py-2 px-2'>
              <p className='font-bold'>{item.title}</p>
              <p
                className='bg-pink-600 h-18 w-18 rounded-full -mt-10
               text-white py-4 px-2 font-bold border-8'
              >
                {item.price}
              </p>
            </div>
            <div className='pl-2 -mt-7 py-4'>
              <p className='flex items-center text-purple-700'>
                View More
                <ArrowSmRightIcon className='w-5 ml-2' />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
