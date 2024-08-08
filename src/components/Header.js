import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/img/agents/icons8-home-64.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b sticky top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to="/">
          <img src={Logo1} alt="" />
        </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link className='bg-green-700 hover:bg-green-500 text-white px-4 py-3 rounded-lg transition' to='/cart'>
            Cart
          </Link>
          <Link className='bg-purple-700 hover:bg-purple-500 text-white px-4 py-3 rounded-lg transition' to=''>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
