import React from 'react';

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
      <div className='mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-purple-600 font-bold text-2xl'>
            Need advie on how to improve yout flow?
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit qui atque facilis corrupti perferendis velit nesciunt
            cumque molestiae.
          </p>
        </div>
        <div className='my-4 '>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              type='mail'
              placeholder='email'
              className='p-3 flex w-full rounded-md text-black'
            />
            <button className='bg-purple-600 py-3 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none'>
              Call Me
            </button>
          </div>
          <p>we are conseref about the security of your data, read{''}</p>
          <span className='text-purple-600'>privacy Policy</span>
        </div>
        <hr className='my-8 bg-gray-700 border-red-100' />
      </div>
    </div>
  );
};

export default NewsLetter;
