import Image from 'next/image';
import React from 'react';

const Delivery = () => {
  return (
    <div id='deliv' className='w-full bg-white py-16 px-4'>
      <h3 className='text-pink-600 font-bold text-2xl text-center'>Quick</h3>
      <div className='w-[1520] mx-auto grid md:grid-cols-2'>
        <img
          className='w-[550] mx-auto my-4'
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
          alt='TwoPhone'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-purple-400 font-bold'> Get App </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>
            Limites Edition
          </h1>
          <p>
          Connect with fellow food enthusiasts, exchange culinary secrets, and share your passion for all things delicious. Join our vibrant community and embark on a gastronomic journey together
          </p>
          <button className='bg-pink-600 w-[200px] hover:bg-gray-900 text-white font-medium my-6 mx-auto md:mx-0 py-3 rounded-md'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
