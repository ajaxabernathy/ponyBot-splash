import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/watchdog-logo-02.png';

const Navbar = () => {
  return (
    <nav className='bg-theme-blue'>
      <div className='w-full flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Image src={logo} width={70} height={70} alt='WatchDog Logo' />
          <Link
            href='/'
            className='nav_text ml-2 flex items-start md:hover:text-slate-50'
          >
            WatchDog
          </Link>
        </div>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='nav_text flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
            <li>
              <Link
                href='https://github.com/WatchDogCLI/WatchDog/blob/main/README.md'
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
