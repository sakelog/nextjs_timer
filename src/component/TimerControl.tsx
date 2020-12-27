import { useDispatch } from 'react-redux';
import { start, stop, reset, doTimer } from '../redux/lib/remainTimeSlice';
import { selectMode } from '../redux/lib/colorModeSlice';
import { useSelector } from 'react-redux';

import Button from './Button';

import { PlayArrow, Pause, Replay } from '@material-ui/icons';

import styles from './TimerControl.module.scss';

export function TimerControl() {
  const colorMode: string = useSelector(selectMode);
  const dispatch = useDispatch();

  return (
    <div className={styles.root + ' ' + styles[colorMode]}>
      <div className={styles.buttonGroup}>
        <Button
          onClick={() => {
            dispatch(start());
            dispatch(doTimer());
          }}
          className={styles.button}
          endIcon={<PlayArrow />}
        >
          start
        </Button>
        <Button
          onClick={() => {
            dispatch(stop());
          }}
          className={styles.button}
          endIcon={<Pause />}
        >
          stop
        </Button>
        <Button
          onClick={() => {
            dispatch(reset());
          }}
          className={styles.button}
          endIcon={<Replay />}
        >
          reset
        </Button>
      </div>
    </div>
  );
}
