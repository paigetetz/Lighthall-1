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
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default Counter;
