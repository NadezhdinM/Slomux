import React from 'react';
import SlomuxContext from '../Context';

const useDispatch = () => {
	const ctx = React.useContext(SlomuxContext)
	if (!ctx) {
	return () => {}
	}

	return ctx.store.dispatch
};

export default useDispatch;