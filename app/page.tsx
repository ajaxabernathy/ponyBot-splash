import FeaturesCardOne from '@/components/features-card-one';
import FeaturesCardTwo from '@/components/features-card-two';
import FeaturesCardThree from '@/components/features-card-three';

export default function Home() {
  return (
    <main>
      <div className='w-screen landing_body h-screen'>
        <section className=''>
          <div className='head_text text-center md:text-left ml-6'>
            <div className='animate-text bg-gradient-to-r from-black via-black to-theme-blue bg-clip-text text-transparent font-black '>
              Develop.
            </div>
            <div className='animate-text bg-gradient-to-br from-theme-blue via-black to-black bg-clip-text text-transparent'>
              Monitor.
            </div>
            <div className='animate-text bg-gradient-to-bl from-theme-blue via-black to-theme-blue bg-clip-text text-transparent'>
              Deploy.
            </div>
          </div>
        </section>
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
