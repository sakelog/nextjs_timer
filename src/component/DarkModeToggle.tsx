import React, {
  ReducerState,
  ReducerStateWithoutAction,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { setColorMode, toggleColorMode } from '../redux/lib/colorModeSlice';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Switch } from '@material-ui/core';

import styles from './DarkModeToggle.module.scss';

type DarkModeToggleType = {
  ownProps: any;
  state: any;
  setInitMode: any;
  toggleMode: any;
};

const DarkModeToggle = (props: DarkModeToggleType) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const initColorMode = prefersDarkMode ? 'darkmode' : 'lightmode';
  const { setInitMode, toggleMode } = props;

  setInitMode(initColorMode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleMode(props.state.colormode);
  };

  return (
    <div className={styles.root + ' ' + styles[props.state.colormode]}>
      <label className={styles.label}>明</label>
      <Switch
        checked={props.state.isChecked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'color mode toggle' }}
      />
      <label className={styles.label}>暗</label>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: {
      colormode: state.ColorMode.colorMode,
      isChecked: state.ColorMode.toggleColor,
    },
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitMode: (colormode) => dispatch(setColorMode(colormode)),
    toggleMode: (colormode) => dispatch(toggleColorMode(colormode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);
