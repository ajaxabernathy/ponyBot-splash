import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ajax Abernathy',
    image: '/ajax.JPG',
    role: 'Software Engineer',
  },
  {
    name: 'Arjun Vikuntam',
    image: '/arjun.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Jerry Perez',
    image: '/jerry.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Oliver Wendell-Braly',
    image: '/oliver.JPG',
    role: 'Software Engineer',
  },
];
function TeamMemberCard({ name, image, role }: TeamMember) {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='relative w-36 h-36 md:w-48 md:h-48'>
        <Image
          className='rounded-full'
          src={image}
          alt={name}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h3 className='text-lg font-semibold text-black'>{name}</h3>
      <p className='text-gray-800'>{role}</p>
    </div>
  );
}

export default function MeetTheTeamPage() {
  return (
    <main className='px-8 py-16 bg-slate-50'>
      <div className='text-center'>
        <h1 className='nav_text'>Meet the Team</h1>
        <p className='mt-2 tracking-tight text-lg text-gray-800'>
          Get to know the WatchDogs.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-8 mt-24 md:grid-cols-2 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </main>
  );
}
