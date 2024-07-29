import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://www.course-api.com/react-tours-project';
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);
	const removeTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id);
		setTours(newTour);
	};
	const FetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};
	useEffect(() => {
		FetchTours();
	}, []);
	if (isLoading) {
		return <Loading />;
	}
	if (tours.length === 0) {
		return (
			<div className='flex justify-center flex-col items-center mt-40'>
				<h2 className='text-[48px] text-green-500'>
					{tours.length} Tours left
				</h2>
				<button
					className='px-4 py-2 border border-green-500 bg-green-500 text-white'
					onClick={() => FetchTours()}>
					refresh
				</button>
			</div>
		);
	}
	return (
		<>
			<div>
				<Tours tours={tours} removeTour={removeTour} />
			</div>
		</>
	);
}

export default App;
