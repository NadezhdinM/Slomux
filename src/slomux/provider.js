import React from 'react';
import SlContext from './Context';

const Provider = ({ store, children }) => {

	return (
		<SlContext.Provider value={{ store }}>
			{children}
		</SlContext.Provider>
	);	
}

export default Provider;