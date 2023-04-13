import React, { useState, useEffect } from 'react';

const Counter = () => {
	// Get the current count from localStorage.
	const [count, setCount] = useState(
		() => parseInt(localStorage.getItem('count'), 10) || 0
	);

	// Update localStorage when the count value changes.
	useEffect(() => {
		localStorage.setItem('count', count);
	}, [count]);

	const increment = () => setCount(count + 1);

	return (
		<div className='bg-white rounded-lg shadow-lg p-20'>
			<h2 className='text-lg font-bold mb-4'>
				Counter:
				<span class='text-blue-500' id='counter-value'>
					{count}
				</span>
			</h2>
			<button
				class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
				id='increment-button'
				onClick={increment}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
