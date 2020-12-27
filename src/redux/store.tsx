import { configureStore } from '@reduxjs/toolkit';
import remainTimeReducer from './lib/remainTimeSlice';
import colorModeReducer from './lib/colorModeSlice';

export default configureStore({
  reducer: {
    TimerState: remainTimeReducer,
    ColorMode: colorModeReducer,
  },
});
