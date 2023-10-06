'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/watchdog-logo-02.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='bg-theme-blue w-full flex items-center justify-between p-4 max-w-[2480px] mx-auto h-28'>
      {/* Home link and WatchDog logo */}
      <div className='md:flex items-center'>
        <Link
          href='/'
          className='nav_text ml-2 hidden md:flex md:hover:invert items-center'
        >
          <Image
            className='mr-1'
            src={logo}
            width={70}
            height={70}
            alt='WatchDog Logo'
          />
          WatchDog
        </Link>
        {/* Invisible logo link to homepage that appears after breakpoint */}
        <Link
          href='/'
          className='ml-2 flex md:invisible hover:invert items-left'
        >
          <Image
            className='mr-1'
            src={logo}
            width={70}
            height={70}
            alt='WatchDog Logo'
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className='nav_text hidden md:flex p-4 mt-4 md:space-x-8 md:mt-0'>
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

      {/* Navbar with menu at mobile break points  */}
      <div
        onClick={handleNav}
        className='flex hover:invert items-center md:hidden'
      >
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-theme-blue bg-black ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <div className='flex invert items-center'>
          <Image src={logo} width={70} height={70} alt='WatchDog Logo' />
          <div className='nav_text ml-2 flex items-start'>Woof.</div>
        </div>
        <ul className='menu_text text-slate-50'>
          <li className='p-4 border-b border-theme-blue'>
            <Link href='/' className='block py-2 hover:text-theme-blue'>
              Home
            </Link>
          </li>
          <li className='p-4 border-b border-theme-blue'>
            <Link
              href='https://github.com/oslabs-beta/WatchDog/blob/main/README.md'
              className='block py-2 hover:text-theme-blue'
            >
              Docs
            </Link>
          </li>
          <li className='p-4 border-b border-theme-blue'>
            <Link href='/contact' className='block py-2 hover:text-theme-blue'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
