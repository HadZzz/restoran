'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TbTruckReturn } from 'react-icons/tb';
import { FaGoogleWallet } from 'react-icons/fa';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
const TopNavbar = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);

  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl px-2'>
          Makan<span className=' text-pink-600'>Wir</span>
        </h1>
        <div className='hidden md:flex lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-pink-600 text-white p-2 font-bold rounded-full'>
            Free
          </p>
          <p className='p-2 font-bold'>Delivery</p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className=' bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Cari Makanan'
        />
      </div>
      <button className=' bg-pink-600 text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} /> Cart
      </button>
      {sideNav ? (
        <div
          className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ''
      )}

      <div
        className={
          sideNav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          size={25}
          onClick={() => setSideNav(!sideNav)}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className=' font-bold text-2xl p-4'>
          Makan<span className='font-bold text-pink-600'>Wir</span>
        </h2>
        <ul className='flex flex-col p-4 text-gray-900'>
          <li className=' text-xl py-4 flex '>
            <BsPerson
              size={25}
              className='mr-4 text-white font-semibold bg-black rounded-full'
            />
            My Akun
          </li>
          <li className=' text-xl py-4 flex '>
            <TbTruckReturn
              size={25}
              className='mr-4 text-white font-semibold bg-black rounded-full'
            />
            Delivery
          </li>
          <li className=' text-xl py-4 flex '>
            <MdOutlineFavorite
              size={25}
              className='mr-4 text-white font-semibold bg-black rounded-full'
            />
            My Favorite
          </li>
          <li className=' text-xl py-4 flex '>
            <FaGoogleWallet
              size={25}
              className='mr-4 text-white font-semibold bg-black rounded-full'
            />
            My Wallet
          </li>{' '}
          <li className=' text-xl py-4 flex '>
            <MdHelp
              size={25}
              className='mr-4 text-white font-semibold bg-black rounded-full'
            />
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
