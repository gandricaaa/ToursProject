import React, { useState } from 'react';

const Tour = ({ id, name, info, price, image, removeTour }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<article className='border border-gray-400 w-[400px] h-max mt-10 mb-10'>
			<div className='relative'>
				<img
					src={image}
					alt=''
					className=' relative w-[400px] h-[400px]'
				/>
				<span className='absolute top-1 right-1 border border-green-400 bg-green-400 text-white p-[2px]'>
					${price}
				</span>
			</div>
			<div className='p-4'>
				<h5 className='text-center text-gray-400 text-[20px] mb-2'>
					{name}
				</h5>
				<p className='text-center text-gray-500'>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button
						type='button'
						className='text-green-400'
						onClick={() => setReadMore(!readMore)}>
						{readMore ? 'show less' : 'read more'}
					</button>
				</p>
			</div>
			<div className='flex justify-center mt-5 mb-5'>
				<button
					className='px-4 py-2 border border-green-500 bg-white text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500'
					onClick={() => removeTour(id)}>
					Not Interested
				</button>
			</div>
		</article>
	);
};

export default Tour;
