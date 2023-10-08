'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../api/api';

const TopPics = () => {
  return (
    <div>
      <h1 className='text-pink-600 font-bold text-2xl text-center py-2'>
        Top Pics
      </h1>
      <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
        <Splide
          options={{ perPage: 4, gap: '0.5rem', drag: 'free', arrows: false }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className='rounded-3xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-3xl'>
                  <p className='px-2 pt-4 text-2xl text-white'>{item.title}</p>
                  <p className='px-2 text-white'>{item.price}</p>
                  <button className='bg-black/50 hover:bg-black text-white mx-2 absolute bottom-4'>
                    Add To Cart
                  </button>
                </div>
                <img
                  className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPics;
