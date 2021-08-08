import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: { value: 777 },
	reducers: {
		increase: (state) => {
			console.log("Ddd");
			state.value += 1;
		},
		decrease: (state) => {
			state.value -= 1;
		},
		increaseByAmount: (state, action) => {
			state.value += action.payload;
		}
	}
});

export const selectCount = (state) => state.counter.value;
export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
