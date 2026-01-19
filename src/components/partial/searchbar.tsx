import React from 'react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';

const Searchbar: React.FC = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <div className='  flex items-center gap-2 w-60.75 h-14 bg-[#252B37]/60 px-4 rounded-2xl'>
          <Search />
          {/* <img src='icon/Search-icon.png' alt='search-icon' /> */}
          <input
            type='text'
            placeholder='Search Movie'
            className=' text-[#717680] border-0 focus:outline-none'
          />
        </div>
      </div>
      <div className='flex gap-6 lg:hidden text-white'>
        <Search />
        <Menu />
      </div>
    </>
  );
};

export default Searchbar;
