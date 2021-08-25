import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './slomux/provider';
import { createStore } from './slomux/createStore';
import { defaultState, reducer } from './store/reducer';
import Step from './components/Step';
import Counter from './components/Counter';

const store = createStore(reducer, defaultState)

ReactDOM.render(
	<Provider store={store}>
			<Step />
			<Counter />
	</Provider>,
	document.getElementById('root')
)