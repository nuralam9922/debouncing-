import React from 'react';

const Output = React.memo(({ status, output }) => {
	console.log('Calling');
	return (
		<div className="w-full mt-6 max-w-[1000px] bg-zinc-800 rounded-lg shadow-lg p-8">
			<h2 className="text-3xl font-bold mb-4">Your Input</h2>
			<div className="loading-dots flex items-center font-bold text-2xl text-green-500">
				{status && (
					<>
						<div className="dot animate-bounce">.</div> <div className="dot animate-bounce">.</div> <div className="dot animate-bounce">.</div>
					</>
				)}
			</div>
			<ul className="list-disc list-inside capitalize text-wrap break-words">{output}</ul>
		</div>
	);
});

Output.displayName = ''

export default Output;
