import { CHANGE_STEP_SIZE, UPDATE_COUNTER } from "./actions"


export const defaultState = {
	counter: 1,
	stepSize: 1,
}

export const reducer = (state = defaultState, action) => {
	switch(action.type) {
	case UPDATE_COUNTER: 
		return {
			...state,
			counter: state.counter + action.payload * state.stepSize
		}
	case CHANGE_STEP_SIZE:
		return {
			...state,
			stepSize: action.payload
		}
	default:
		{}
	}
}