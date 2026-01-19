import React from 'react';
import { Tv } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className='bg-black lg:justify-between lg:flex'>
      <div className='flex items-center gap-1 pl-4 pt-6 lg:pt-10 lg:pb-10 lg:pl-36'>
        <Tv fill='white' className='w-7 h-7 lg:w-10 lg:h-10' />
        <p className='text-white font-bold text-xl items-center'>Movie</p>
      </div>
      <div className='pl-4 pt-2 pb-9 lg:pt-12 lg:pb-12 lg:pr-36'>
        <p className='text-gray-400 text-sm lg:text-[16px]'>
          Copyright ©2025 Movie Explorer
        </p>
      </div>
    </div>
  );
};

export default Footer;
