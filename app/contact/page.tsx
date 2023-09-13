import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
	name: string;
	image: string;
}

function TeamMember({ name, image }: TeamMemberProps) {
	return (
		<div className='w-2/5 relative'>
			<Image
				className='w-10/12 md:w-11/12'
				src={image}
				alt={name}
				width={50}
				height={50}
			/>
			<h3 className='font-semibold text-lg poppins'>{name}</h3>
		</div>
	);
}

export default function MeetTheTeamPage() {
	return (
		<main className='px-8'>
			<div className='flex flex-col justify-around mb-16 mt-16 md:flex-row'>
				<div>
					<h1 className='font-bold text-3xl pt-serif'>Meet the team</h1>
				</div>
				<div>
					<h2 className='font-semibold text-xl pb-4 poppins'>WHO WE ARE</h2>
					<p className='text-gray-600 pb-10 poppins'>We are WatchDog</p>
				</div>
			</div>

			<div className='grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 place-items-center place-content-around'>
				<TeamMember name='Arjun' image='/jerry1.jpg' />
				<TeamMember name='Jerry' image='/jerry2.jpg' />
				<TeamMember name='Oliver' image='/jerry3.jpg' />
				<TeamMember name='Ajax' image='/jerry4.jpg' />
			</div>
			<footer className='text-center mt-12 poppins'>© 2023 WatchDog</footer>
		</main>
	);
}
