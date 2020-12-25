import { useEffect, useReducer } from 'react';

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

function InitState(initialTime: number): reducerState {
  return {
    remainTime: initialTime,
    TimerStopped: true,
    buttonDisabled: false,
    alertOpened: false,
  };
}

type reducerState = {
  remainTime: number;
  TimerStopped: boolean;
  buttonDisabled: boolean;
  alertOpened: boolean;
};
type reducerAction = {
  function?: string;
  isStopped?: boolean;
  isDisabled?: boolean;
  isOpened?: boolean;
  payload?: number;
};

const reducer: React.Reducer<reducerState, reducerAction> = (
  state: reducerState,
  action: reducerAction
): any => {
  var remainTime: number;
  var TimerStopped: boolean;
  var buttonDisabled: boolean;
  var alertOpened: boolean;

  remainTime = state.remainTime;
  TimerStopped = state.TimerStopped;
  buttonDisabled = state.buttonDisabled;
  alertOpened = state.alertOpened;

  TimerStopped = action.isStopped ? true : false;
  buttonDisabled = action.isDisabled ? true : false;
  alertOpened = action.isOpened ? true : false;

  switch (action.function) {
    case 'reset':
      return InitState(action.payload);
    case 'do':
      remainTime--;
    default:
      return {
        remainTime: remainTime,
        TimerStopped: TimerStopped,
        buttonDisabled: buttonDisabled,
        alertOpened: alertOpened,
      };
  }
};

function Timer(initialTime: number) {
  const [state, dispath] = useReducer(reducer, initialTime, InitState);
  var timerID: NodeJS.Timeout;
  useEffect(() => {
    timerID = setInterval(() => {
      state.remainTime > 0
        ? state.TimerStopped == false && dispath({ function: 'do' })
        : (clearInterval(timerID),
          dispath({ isOpened: true, isDisabled: true }),
          setTimeout(() => {
            dispath({
              function: 'reset',
              payload: initialTime,
              isDisabled: false,
            });
          }, 5000));
    }, 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <Box>
        <Typography variant="h1" component="p">
          {TimeConvert(state.remainTime)}
        </Typography>
        <ButtonGroup>
          <Button
            onClick={() => dispath({ isStopped: false })}
            disabled={state.buttonDisabled}
            endIcon={<PlayArrowIcon />}
          >
            start
          </Button>
          <Button
            onClick={() => dispath({ isStopped: true })}
            endIcon={<PauseIcon />}
          >
            stop
          </Button>
          <Button
            onClick={() => dispath({ function: 'reset', payload: initialTime })}
            endIcon={<ReplayIcon />}
          >
            reset
          </Button>
        </ButtonGroup>
      </Box>

      <Snackbar
        open={state.alertOpened}
        autoHideDuration={5000}
        onClose={() => dispath({ isOpened: false })}
      >
        <Alert onClose={() => dispath({ isOpened: false })} severity="success">
          Time Up!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Timer;
