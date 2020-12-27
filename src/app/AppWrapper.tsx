import React from 'react';
import { connect } from 'react-redux';

import Timer from '../app/Timer';
import DarkModeToggle from '../component/DarkModeToggle';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

import styles from './AppWrapper.module.scss';

type AppWrapperType = {
  children: any;
  state: any;
  dispatch: any;
};

const AppWrapper = (props: AppWrapperType) => {
  return (
    <div
      className={styles.root + ' ' + styles[props.state.ColorMode.colorMode]}
    >
      {props.children}
      <Header />
      <Navbar>
        <DarkModeToggle />
      </Navbar>
      <Timer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
