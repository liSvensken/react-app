import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  } as CounterSchema,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer;
