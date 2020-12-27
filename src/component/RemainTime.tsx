import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTime } from '../redux/lib/remainTimeSlice';
import { selectMode } from '../redux/lib/colorModeSlice';
import { TimeConverter } from '../lib/TimeConverter';

import styles from './RemainTime.module.scss';

export function RemainTime() {
  const colorMode: string = useSelector(selectMode);
  const remainTime: number = useSelector(selectTime);
  const feedBack: String = remainTime <= 0 ? 'TimeUp' : '';

  return (
    <div className={styles.root + ' ' + styles[colorMode]}>
      <span className={styles.timeString}>{TimeConverter(remainTime)}</span>
      <span className={styles.feedback}>{feedBack}</span>
    </div>
  );
}
