import HomeText from '@/components/home-text';

export default function Home() {
  return (
    <main>
      <section className='mt-20 w-full flex-center flex-col'>
        <h1 className='text-center'>
          <span className='head_text animate-text bg-gradient-to-r from-black via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>
            {'Develop. '}
          </span>
          <span className='head_text animate-text bg-gradient-to-r from-black via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>
            {'Preview. '}
          </span>
          <span className='head_text animate-text bg-gradient-to-r from-black via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>
            {'Ship. '}
          </span>
        </h1>
        <div className='flex justify-center p-10'>
          <p className='body_text w-1/2 text-2xl text-center'>
            ponyBot's CLI gives users customized monitoring of Kubernetes
            clusters in a slim, lightweight package afjkahdsfkjahdfkhasdkj
            adskjhd akajdhf kjahdsf .
          </p>
        </div>
      </section>
      <span className='flex mt-10 justify-center'>
        <button className='h-10 w-48 rounded-md border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-l font-inter flex items-center justify-center'>
          Learn More
        </button>
        <button className='ml-5 h-10 w-48 rounded-md border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-l font-inter flex items-center justify-center'>
          Demo
        </button>
      </span>
      {/* <HomeText /> */}
    </main>
  );
}
