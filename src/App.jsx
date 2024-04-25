import React from 'react';
import Output from './components/Output';
import { useState } from 'react';
import { useRef } from 'react';
import useDebouching from './hooks/useDebouching';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [isTyping, setIsTyping] = useState();
	const [delayedInput, setDelayedInput] = useState('');
	const [callDebouncing] = useDebouching();

	const handelInputDelayedTimeout = (e) => {
		const value = e.target.value;
		setInputValue(value);
		setIsTyping(true);
		callDebouncing(() => handelOutput(value), 1000);
	};

	const handelOutput = (value) => {
		setDelayedInput(value);
		setIsTyping(false);
	};

	const handelClear = () => {
		setInputValue('');
		setDelayedInput('');
		setIsTyping('');
	};

	return (
		<main className="container flex flex-col items-center pt-10 bg-zinc-900 text-white h-screen">
			<div className="w-full max-w-[1000px] bg-zinc-800 rounded-lg shadow-lg p-8">
				<h1 className="text-3xl font-bold mb-4">Interactive Input</h1>
				<div className="flex items-center">
					<input
						onChange={handelInputDelayedTimeout}
						value={inputValue}
						className="w-full outline-none rounded-l-md px-4 py-2 text-xl bg-zinc-700 text-white placeholder-gray-400"
						type="text"
						placeholder="Enter text here..."
					/>
					<button
						onClick={handelClear}
						type="button"
						className="text-white rounded-r-md text-xl bg-blue-700 py-2 px-6 ml-2 hover:bg-blue-600 transition duration-300"
					>
						Clear
					</button>
				</div>
			</div>

			<Output output={delayedInput} status={isTyping} />
		</main>
	);
}

export default App;
