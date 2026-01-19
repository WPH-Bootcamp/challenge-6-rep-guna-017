import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './searchbar';
import { Tv } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex justify-between items-center px-4 py-5 md:px-36 md:py-6 top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${
        isScrolled ? 'bg-black/80 shadow' : 'bg-transparent'
      }`}
    >
      <div className='flex  items-center justify-between text-[#FDFDFD]'>
        <Link to='/'>
          <div className='flex gap-1'>
            <Tv fill='white' className='h-7 w-7 md:h-10 md:w-10 ' />

            <p className='text-[20px] md:text-[28px]'>Movie</p>
          </div>
        </Link>
        <ul className='hidden lg:flex gap-12 md:pl-20 '>
          <li>Home</li>
          <li>Favorites</li>
        </ul>
      </div>
      <Searchbar />
    </div>
  );
};

export default Navbar;
