import * as React from 'react';
import { useState } from 'react';
import { setTimeout } from 'timers';

import Header from '../component/header';
import {
  CssBaseline,
  Container,
  Box,
  Button,
  Typography,
} from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Timer = () => {
  const setTime = 180;

  const [remainTime, setRemainTime] = useState<number>(setTime);
  var nowTime: number = setTime;

  const CountDown = (): void => {
    var timer = setInterval(() => {
      nowTime = nowTime - 1;
      setRemainTime(nowTime);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, setTime * 1000);
  };

  function TimeConvert(second_: number) {
    var timeM: string = ('0' + Math.floor(second_ / 60)).slice(-2);
    var timeS: string = ('0' + Math.floor(second_ % 60)).slice(-2);
    var timeString: string = timeM + ':' + timeS;

    return timeString;
  }

  return (
    <Container maxWidth="sm">
      <Header />
      <CssBaseline />
      <Box m={1}>
        <Typography variant="h1" component="p" align="center">
          {TimeConvert(remainTime)}
        </Typography>
        <Button
          variant="contained"
          onClick={CountDown}
          endIcon={<PlayArrowIcon />}
        >
          start
        </Button>
      </Box>
    </Container>
  );
};

export default Timer;
