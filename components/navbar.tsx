'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/watchdog-logo-02.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='bg-theme-blue flex items-center justify-between p-4 max-w-[2480px] mx-auto'>
      {/* WatchDog logo and home page link */}
      <div className='flex items-center hidden'>
        <Image src={logo} width={70} height={70} alt='WatchDog Logo' />
        <Link
          href='/'
          className='nav_text ml-2 flex items-start hover:text-slate-50'
        >
          WatchDog
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className='nav_text flex hidden'>
          {/* p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0' */}
          <li>
            <Link
              href='https://github.com/oslabs-beta/WatchDog/blob/main/README.md'
              className='block py-2 pl-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-50'
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='block py-2 pr-5 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-50'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu with mobile break points  */}
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-theme-blue ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <div className='flex items-center'>
          <Image src={logo} width={70} height={70} alt='WatchDog Logo' />
          <Link
            href='/'
            className='nav_text ml-2 flex items-start hover:text-slate-50'
          >
            WatchDog
          </Link>
        </div>
        <ul className='p-4'>
          <li className='p-4 border-b border-black'>
            <Link
              href='https://github.com/oslabs-beta/WatchDog/blob/main/README.md'
              className='block py-2 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-50'
            >
              Docs
            </Link>
          </li>
          <li className='p-4 border-b border-black'>
            <Link
              href='/contact'
              className='block py-2 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-50'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
