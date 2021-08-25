import { updateCounter } from "../store/actions";
import useDispatch from "../slomux/hooks/useDispatch";
import useSelector from '../slomux/hooks/useSelector';

const Counter = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(updateCounter(-1))}>-</button>
			<span> {counter} </span>
			<button onClick={() => dispatch(updateCounter(1))}>+</button>
		</div>
   )
}

export default Counter;