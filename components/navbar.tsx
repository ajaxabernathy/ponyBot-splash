import Link from 'next/link';
import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { debounce } from '../utils/helpers';

const Navbar = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 70) ||
  //       currentScrollPos < 10
  //   );

  //   setPrevScrollPos(currentScrollPos);
  // }, 100);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  // const navbarStyles = {
  //   position: 'fixed',
  //   height: '60px',
  //   width: '100%',
  //   backgroundColor: 'white',
  //   textAlign: 'center',
  //   transition: 'top 0.4s',
  // };

  // style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}
  return (
    <nav className='bg-theme-blue'>
      <div className='w-full flex flex-wrap items-center justify-between p-4'>
        <Link
          href='/'
          className='nav_text ml-5 flex items-center md:hover:text-slate-50'
        >
          WatchDog
        </Link>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='nav_text flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
            <li>
              <Link
                href='/docs'
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
      </div>
    </nav>
  );
};

export default Navbar;
