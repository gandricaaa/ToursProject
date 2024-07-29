import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
	return (
		<article className='container mx-0 auto flex flex-col items-center justify-center'>
			<div className='flex justify-center w-[400px]'>
				<h2 className='text-center mt-14 text-[42px] border border-t-0 border-l-0 border-r-0 border-b-4 border-green-500'>
					Our Tours
				</h2>
			</div>
			<div className='flex flex-wrap gap-5 items-center justify-center mt-5'>
				{tours.map((tour) => {
					return (
						<Tour key={tour.id} {...tour} removeTour={removeTour} />
					);
				})}
			</div>
		</article>
	);
};

export default Tours;
