import Image from 'next/image';
import logo from '../public/watchdog-logo-02.png';

function FeaturesCardThree() {
  return (
    <section className='h-screen bg-black flex flex-col'>
      <div className='flex w-full'>
        {/* Left Column */}
        <div className='w-1/2 pr-2 feature_p mb-4 flex flex-col justify-center items-center'>
          <div className='w-full h-1/2 flex justify-center items-center bg-theme-blue'>
            <Image src={logo} width={500} height={500} alt='WatchDog Logo' />
          </div>
        </div>

        {/* Right Column */}
        <div
          className='md:text-[40px] font-[600] leading-snug w-1/2 overflow-y-auto h-screen'
          style={{ overflowY: 'scroll' }}
        >
          line-height: 2.5cm; */ letter-spacing: 0px;
          <h2 className='text-theme-blue'>Custom Alerts</h2>
          <p className='text-slate-50 leading-normal mb-16'>
            Get notified for specific pod jobs, stay aware of task outcomes.
          </p>
          <p className='text-slate-50'>
            WatchDog offers a command line interface that is a{' '}
            <span className='text-theme-blue'>
              slim, lightweight alternative
            </span>{' '}
            to all of the heavier monitoring tools out there.
          </p>
          <p className='text-slate-50 py-16'>
            It gives a bank of commands that allow users to{' '}
            <span className='text-theme-blue'>
              subscribe to crucial events within a cluster
            </span>
            , providing them with custom monitoring and visual alerts right in
            the console.
          </p>
          <p className='text-slate-50'>
            Get notified about events like node, pod, or container failures,{' '}
            <span className='text-theme-blue'>WatchDog sends alerts</span> to
            keep users aware and minimize downtime.
          </p>
          <p className='text-slate-50 py-16'>
            <span className='text-theme-blue'>
              WatchDog lives in your cluster
            </span>
            , making it accessible to all users. Alerts show up right in the
            console, right where you are working.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCardThree;
