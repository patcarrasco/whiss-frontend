import { useEffect, createRef } from 'react';

export const useScrollBottom = () => {
	const ref = createRef();
	useEffect(() => {
		ref.current.scrollTop = ref.current.scrollHeight;
	});
	return ref;
}