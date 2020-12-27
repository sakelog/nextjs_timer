import { createSlice } from '@reduxjs/toolkit';

type reducerState = {
  initialTime: number;
  remainTime?: number;
  isWorking: boolean;
};

const initialState: reducerState = {
  initialTime: 180,
  remainTime: 180,
  isWorking: false,
};

var timerID;

export const remainTimeSlice = createSlice({
  name: 'TimerState',
  initialState: initialState,
  reducers: {
    setTime: (state, action) => {
      state.initialTime = action.payload;
      state.remainTime = state.initialTime;
    },
    decrement: (state) => {
      if (state.isWorking == true && state.remainTime > 0) {
        state.remainTime -= 1;
      } else {
        state.isWorking = false;
      }
    },

    start: (state) => {
      clearInterval(timerID);
      state.isWorking = true;
    },
    stop: (state) => {
      state.isWorking = false;
    },
    reset: (state) => {
      state.remainTime = state.initialTime;
      state.isWorking = false;
    },
  },
});

export const {
  setTime,
  start,
  stop,
  reset,
  decrement,
} = remainTimeSlice.actions;

export const doTimer = () => (dispatch) => {
  timerID = setInterval(() => {
    dispatch(decrement());
  }, 1000);
};

export const setCustomTime = (customTime) => (dispatch) => {
  dispatch(setTime(customTime));
};

export const selectTime = (state) => state.TimerState.remainTime;

export default remainTimeSlice.reducer;
