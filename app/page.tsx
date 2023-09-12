import FeaturesCardOne from '@/components/features-card-one';
import FeaturesCardTwo from '@/components/features-card-two';
import FeaturesCardThree from '@/components/features-card-three';

export default function Home() {
  return (
    <main>
      <div className='w-full landing_body h-screen flex-center flex-col'>
        <section className=''>
          <h1 className='text-left ml-10'>
            <div className='head_text animate-text bg-gradient-to-r from-black via-black to-theme-blue bg-clip-text text-transparent font-black'>
              Develop.
            </div>
            <div className='head_text animate-text bg-gradient-to-br from-theme-blue via-black to-black bg-clip-text text-transparent'>
              Monitor.
            </div>
            <div className='head_text animate-text bg-gradient-to-bl from-theme-blue via-black to-theme-blue bg-clip-text text-transparent'>
              Deploy.
            </div>
          </h1>
        </section>
        {/* <div className='flex justify-center p-10'>
          <p className='body_text w-1/2 text-2xl text-right'>
            ponyBot's CLI gives users customized monitoring of Kubernetes
            clusters in a slim, lightweight package afjkahdsfkjahdfkhasdkj
            adskjhd akajdhf kjahdsf .
          </p>
        </div>
        <span className='flex mt-10 justify-center'>
          <button className='h-10 w-48 rounded-md border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-l font-inter flex items-center justify-center'>
            Learn More
          </button>
          <button className='ml-5 h-10 w-48 rounded-md border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-l font-inter flex items-center justify-center'>
            Demo
          </button>
        </span> */}
      </div>
      <FeaturesCardOne />
      <div className='w-1/2'>
        <h1 className='head_text bg-black p-2 text-slate-50 w-screen'>
          Features
        </h1>
      </div>
      {/* <FeaturesCardTwo /> */}
      <FeaturesCardThree />
    </main>
  );
}
