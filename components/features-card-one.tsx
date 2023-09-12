'use client';
import { createKey } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useState } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PiDog } from 'react-icons/Pi';

function FeaturesCardOne() {
  const [copy, setCopy] = useState(false);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <main>
      <section className='w-full flex flex-row h-screen justify-between bg-slate-100'>
        <div className='feature_p_lg  w-1/2'>
          WatchDog is a{' '}
          <span className='text-theme-blue'>
            customizable Kubernetes monitoring solution
          </span>{' '}
          for developers building containerized applications
        </div>
        <div className='w-1/2 grid place-items-center'>
          <div className='h-2/3 w-1/2 m-4 p-2 border-2 border-theme-blue rounded'>
            <div className='flex items-center justify-start'>
              <PiDog size={100} />
              <span className='nav_text ml-2'>Get Started</span>
            </div>
            <div className='p-8'>
              <div className='flex items-center justify-between w-full'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('npm i watchdog');
                    setCopy(true);
                    handleClick();
                  }}
                  className='border flex w-64 rounded border-slate-400 hover:bg-green-100'
                >
                  <code className='p-2 ml-1'>{' > npm i watchdog'}</code>
                </button>
                {copy ? (
                  <span className='w-8 h-8 flex items-center justify-center rounded-full text-slate-50 bg-green-400'>
                    &#x2713;
                  </span>
                ) : null}
              </div>
            </div>
            <ul className='p-6 text-slate-600 list-disc text-xl'>
              <li className='py-4'>
                This is a Node.js module available though the npm registry.
              </li>
              <li className='py-4'>
                Installation is done using the above npm install command.
              </li>
              <li className='py-4'>
                Once installed, run{' '}
                <span className='text-theme-blue decoration-solid underline-offset-1'>
                  <Link href='/docs'>commands</Link>
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
