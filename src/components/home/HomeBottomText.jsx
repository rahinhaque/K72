import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
 return (
  <div className='font-[font2] flex items-center justify-center gap-2 text-white'>
   <Link className='text-[5.5vw] leading-[6vw] border-3 border-white rounded-full px-10 pt-5 pb-3 percase'>Projects</Link>
   <Link className='text-[5.5vw] leading-[6vw] border-3 border-white rounded-full px-10 pt-5 pb-3 uppercase'>Agence</Link>
  </div>
 );
};

export default HomeBottomText;