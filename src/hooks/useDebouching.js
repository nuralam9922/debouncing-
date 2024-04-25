import { useRef } from 'react';

const useDebouching = () => {
	let timeOut = useRef(null);

	const callDebouncing = (callback, delay = 1000) => {
		clearTimeout(timeOut.current);
		timeOut.current = setTimeout(() => {
			callback();
		}, delay);
	};

	return [callDebouncing];
};

export default useDebouching;
