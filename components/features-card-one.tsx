'use client';
import { createKey } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/watchdog-logo-02.png';
import { BiCopy } from 'react-icons/bi';

function FeaturesCardOne() {
  const [copy, setCopy] = useState(false);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <main>
      <section className='w-full flex flex-row min-h-screen min-w-screen justify-between bg-slate-100'>
        <div className='font-[600] leading-none tracking-tighter pl-[10px] pt-[10px] md:pt-[60px] md:pl-[60px] text-[40px] md:text-[80px] w-1/2'>
          WatchDog is a{' '}
          <span className='text-theme-blue'>
            customizable Kubernetes monitoring solution
          </span>{' '}
          for developers building containerized applications
        </div>
        <div className='w-1/2 hidden md:grid place-items-center'>
          <div className='h-auto w-1/2 m-4 p-2 border-4 shadow-slate-300 shadow-xl border-theme-blue rounded'>
            <div className='flex items-center justify-start'>
              <Image src={logo} width={100} height={100} alt='WatchDog Logo' />

              <span className='nav_text ml-2 '>Get Started</span>
            </div>
            <div className='p-8'>
              <div className='flex items-center justify-between w-full'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('npm i watchdogcli');
                    setCopy(true);
                    handleClick();
                  }}
                  className='border flex justify-between items-center w-64 rounded border-slate-400 hover:bg-green-100'
                >
                  <code className='p-2 ml-1'>{' > npm i watchdogcli'}</code>
                  <BiCopy className='flex items-center p-2' size={30} />
                </button>
                {copy ? (
                  <span className='w-8 h-8 flex items-center justify-center rounded-full text-slate-50 bg-green-400'>
                    &#x2713;
                  </span>
                ) : null}
              </div>
            </div>
            <ul className='pl-6 text-slate-600 list-disc text-xl'>
              <li className='py-1'>
                This is a Node.js module available through the npm registry.
              </li>
              <li className='pb-1'>
                Installation is done using the above npm install command.
              </li>
              <li className='pb-1'>
                Once installed, run{' '}
                <span className='text-theme-blue decoration-solid underline-offset-1'>
                  <Link href='https://github.com/WatchDogCLI/WatchDog/blob/main/README.md'>
                    commands
                  </Link>
                </span>{' '}
                to interact with your Kubernetes cluster.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FeaturesCardOne;
