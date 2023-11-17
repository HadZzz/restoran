import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div id='footer' className='max-w-[1520px] m-auto px-4 py-2 bg-black'>
      <div className=' py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-pink-600'>
            Makan<span className='text-pink-600'>Wir</span>
          </h1>
          <p>
          Connect with fellow food enthusiasts, exchange culinary secrets, and share your passion for all things delicious. Join our vibrant community and embark on a gastronomic journey together

          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex   selection:justify-between mt-6'>
          <div>
            <h6 className='font-medium text-slate-300'>location</h6>
            <ul>
              <li className='py-2 text-sm'>Nagoya</li>{' '}
              <li className='py-2 text-sm'>Tokyo</li>{' '}
              <li className='py-2 text-sm'>Akita</li>{' '}
              <li className='py-2 text-sm'>Hokaido</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
