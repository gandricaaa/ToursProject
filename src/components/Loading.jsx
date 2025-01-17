import React from 'react';

const Loading = () => {
	return (
		<div className='flex justify-center items-center'>
			<button
				type='button'
				className='bg-green-500 text-white p-5 text-center  rounded-full'
				disabled>
				<svg
					class='animate-spin h-5 w-5 mr-3 ...'
					viewBox='0 0 24 24'></svg>
				Processing...
			</button>
		</div>
	);
};

export default Loading;
