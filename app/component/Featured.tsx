'use client';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'; // Perhatikan bahwa RxDotFilled digunakan dari react-icons/rx

interface Slider {
  url: string;
}

const Sliders: Slider[] = [
  {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
  },
  {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
  },
  {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
  },
];

const Featured = () => {
  const [currentIndext, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndext === 0;
    const newIndex: number = isFirstSlide
      ? Sliders.length - 1
      : currentIndext - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndext === Sliders.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndext + 1;
    setCurrentIndex(newIndex);
  };

  const moveSlider = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 group relative'>
      <div
        className='w-full h-full bg-center bg-cover rounded-2xl duration-500'
        style={{ backgroundImage: `url(${Sliders[currentIndext].url})` }}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-pink-600'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-pink-600'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 py-2 justify-center'>
        {Sliders.map((sliderItem, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveSlider(slideIndex)}
            className=' text-2xl cursor-pointer'
          >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
