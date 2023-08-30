import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='left-0 top-0 w-full z-10'>
      <div className='max-w-[1240px] m-auto flex items-center'>
        <Link href='/' className='font-bold text-xl'>
          {/* <Image
            src='/assets/images/unicorn.svg'
            width={30}
            height={30}
            alt='ponyBot Logo'
            className='object-contain'
          /> */}
          ponyBot
        </Link>
        <ul className='hidden sm:flex p-4 body_text'>
          <li className='p-4'>
            <Link href='/features'>Features</Link>
          </li>
          <li className='p-4'>
            <Link href='/docs'>Docs</Link>
          </li>
        </ul>
        <div className='body_text flex md:flex md:flex-grow flex-row justify-end space-x-1'>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
