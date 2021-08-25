import React, { useEffect, useState } from 'react';
import SlContext from '../Context';

const useSelector = (selector) => {
	const ctx = React.useContext(SlContext)

	const [state, setState] = useState(ctx.store.getState());

	const handleChange = (state) => {
	setState(state);
	}

	useEffect(() => {

	if (!ctx) return;
	const unsubscribe = ctx.store.subscribe(handleChange);
	return () => {
		unsubscribe();
	}
	}, [ctx])

	return selector(state);
}

export default useSelector;