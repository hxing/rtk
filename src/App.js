import { useSelector, useDispatch } from "react-redux";

import {
	increase,
	decrease,
	increaseByAmount,
	selectCount
} from "./redux/counter/counter-slice";
import "./styles.css";

export default function App() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => dispatch(increase())}>increase</button>
			<button onClick={() => dispatch(decrease())}>decrease</button>
			<button onClick={() => dispatch(increaseByAmount(200))}>
				increaseByAmount
			</button>
		</div>
	);
}
