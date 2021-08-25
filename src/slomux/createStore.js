export const createStore = (reducer, initialState) => {
	let currentState = initialState
	let listeners = []

	const getState = () => currentState;
	const dispatch = action => {
		currentState = reducer(currentState, action)
		listeners.forEach(listener => listener(currentState))
	}

	
	const subscribe = (listener) => {
		listeners.push(listener)

		return function unsubscribe() {
			const index = listeners.indexOf(listener)
			listeners.splice(index, 1)
		}
	}

	return { getState, dispatch, subscribe }
}