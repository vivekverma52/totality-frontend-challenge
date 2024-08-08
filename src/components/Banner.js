import React from 'react';

//importing image
import Image from '../assets/img/house-banner.png';

//importing component
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-purple-700'>
            Rent<br />
            </span>
            Your Dreams Property With Us.
        </h1>
        <p className='max-w-[480px] mb-8'>
         Charming Property apartment in a prime location, featuring modern amenities, hardwood floors, and a spacious living area. Enjoy a fully-equipped kitchen, in-unit laundry, and a private balcony. Close to shopping, dining, and public transportation. Ideal for urban living!
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search />

  </section>;
};

export default Banner;
