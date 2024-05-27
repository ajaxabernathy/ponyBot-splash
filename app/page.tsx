import FeaturesCardOne from '@/components/features-card-one';
import FeaturesCardTwo from '@/components/features-card-two';
import FeaturesCardThree from '@/components/features-card-three';

export default function Home() {
  return (
    <main>
      <div className='md:flex landing_body min-h-screen w-screen'>
        <section className=''>
          <div className='text-center items-center tracking-tighter font-extrabold leading-[1.2] text-[80px] md:text-[250px] md:block flex flex-col md:text-left md:ml-6 -space-y-6 md:-space-y-8 py-16 md:py-0'>
            <div className='animate-text bg-gradient-to-r from-black via-black to-theme-blue bg-clip-text text-transparent font-black'>
              Develop.
            </div>
            <div className='animate-text bg-gradient-to-br from-theme-blue via-black to-black bg-clip-text text-transparent'>
              Monitor.
            </div>
            <div className='animate-text bg-gradient-to-bl from-theme-blue via-black to-theme-blue bg-clip-text text-transparent'>
              Deploy.
            </div>
            <div className='flex py-[100px] w-3/4 nav_text_light text-slate-50 md:hidden'></div>
          </div>
        </section>
      </div>
      <FeaturesCardOne />
      <div className=''>
        <h1 className='tracking-tighter font-extrabold leading-[1.2] text-[50px] md:text-[250px] bg-black p-2 text-slate-50 w-screen'>
          Features
        </h1>
      </div>
      {/* <FeaturesCardTwo /> */}
      <FeaturesCardThree />
    </main>
  );
}
