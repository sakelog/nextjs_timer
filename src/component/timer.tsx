import { useEffect, useReducer, useState } from 'react';

import {
  Box,
  ButtonGroup,
  Button,
  Typography,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

import TimeConvert from './timeConvert';

function TimerInit(initialTime: number) {
  return { remainTime: initialTime };
}

function TimeReducer(state, action) {
  switch (action.type) {
    case 'do':
      return { remainTime: state.remainTime - 1 };
    case 'reset':
      return TimerInit(action.payload);
    default:
      throw new Error();
  }
}
function FLGReducer(state, action) {
  switch (action.type) {
    case 'start':
      return { procFLG: true };
    case 'stop':
      return { procFLG: false };
    default:
      throw new Error();
  }
}
function AlertOpen(state, action) {
  switch (action.type) {
    case 'open':
      return { open: true };
    case 'close':
      return { open: false };
    default:
      throw new Error();
  }
}
function ButtonDisable(state, action) {
  switch (action.type) {
    case 'disable':
      return { start: true };
    case 'able':
      return { start: false };
    default:
      throw new Error();
  }
}

function Timer(initialTime: number) {
  const [timeCount, timeDispath] = useReducer(
    TimeReducer,
    initialTime,
    TimerInit
  );
  const [state, flgDispath] = useReducer(FLGReducer, { procFLG: false });
  const [aleartState, alertDispath] = useReducer(AlertOpen, { open: false });
  const [buttonState, buttonDispath] = useReducer(ButtonDisable, {
    start: false,
  });

  var timerID;
  useEffect(() => {
    timerID = setInterval(() => {
      state.procFLG ? timeDispath({ type: 'do' }) : clearInterval(timerID);
      timeCount.remainTime - 1 == 0 &&
        (flgDispath({ type: 'stop' }),
        alertDispath({ type: 'open' }),
        buttonDispath({ type: 'disable' }),
        setTimeout(
          () => (
            timeDispath({ type: 'reset', payload: initialTime }),
            buttonDispath({ type: 'able' })
          ),
          5000
        ));
    }, 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      <Box m={1}>
        <Typography variant="h1" component="p" align="center">
          {TimeConvert(timeCount.remainTime)}
        </Typography>
        <Typography align="center">
          <ButtonGroup>
            <Button
              onClick={() => {
                flgDispath({ type: 'start' });
              }}
              endIcon={<PlayArrowIcon />}
              disabled={buttonState.start}
            >
              start
            </Button>
            <Button
              onClick={() => {
                flgDispath({ type: 'stop' });
              }}
              endIcon={<PauseIcon />}
            >
              stop
            </Button>
            <Button
              onClick={() => {
                timeDispath({ type: 'reset', payload: initialTime });
                flgDispath({ type: 'stop' });
              }}
              endIcon={<ReplayIcon />}
            >
              reset
            </Button>
          </ButtonGroup>
        </Typography>
        <Snackbar
          open={aleartState.open}
          autoHideDuration={5000}
          onClose={() => alertDispath({ type: 'close' })}
        >
          <Alert
            onClose={() => alertDispath({ type: 'close' })}
            severity="success"
          >
            Time Up!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default Timer;
