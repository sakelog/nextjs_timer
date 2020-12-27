import { createSlice } from '@reduxjs/toolkit';

type reducerState = {
  colorMode: string;
  isSetColor: boolean;
  toggleColor: boolean;
};

const initialState: reducerState = {
  colorMode: 'lightmode',
  isSetColor: false,
  toggleColor: false,
};

export const colorModeSlice = createSlice({
  name: 'ColorMode',
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      !state.isSetColor &&
        ((state.colorMode = action.payload),
        (state.toggleColor = state.colorMode === 'darkmode' ? true : false),
        (state.isSetColor = true));
    },
    setLightMode: (state) => {
      state.colorMode = 'lightmode';
      state.toggleColor = false;
    },
    setDarkMode: (state) => {
      state.colorMode = 'darkmode';
      state.toggleColor = true;
    },
  },
});

export const { set, setLightMode, setDarkMode } = colorModeSlice.actions;

export const setColorMode = (colorMode) => (dispatch) => {
  dispatch(set(colorMode));
};
export const toggleColorMode = (colorMode) => (dispatch) => {
  colorMode === 'lightmode'
    ? dispatch(setDarkMode())
    : dispatch(setLightMode());
};

export const selectMode = (state) => state.ColorMode.colorMode;

export default colorModeSlice.reducer;
