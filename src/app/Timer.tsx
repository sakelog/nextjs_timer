import { RemainTime } from '../component/RemainTime';
import { TimerControl } from '../component/TimerControl';
import { TimeSetting } from '../component/TimeSetting';
import { selectMode } from '../redux/lib/colorModeSlice';
import { useSelector } from 'react-redux';

import styles from './Timer.module.scss';

function Timer() {
  const colorMode: string = useSelector(selectMode);
  return (
    <div className={styles.root + ' ' + styles[colorMode]}>
      <TimeSetting />
      <RemainTime />
      <TimerControl />
    </div>
  );
}

export default Timer;
