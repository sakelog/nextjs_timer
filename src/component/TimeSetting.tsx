import React from 'react';
import { useDispatch } from 'react-redux';
import { setCustomTime } from '../redux/lib/remainTimeSlice';
import { selectMode } from '../redux/lib/colorModeSlice';
import { useSelector } from 'react-redux';

import Button from './Button';

import styles from './TimeSetting.module.scss';

type ControlItemsType = {
  time: number;
  label: string;
};

export function TimeSetting() {
  const colorMode: string = useSelector(selectMode);
  const dispatch = useDispatch();

  const controlItems: ControlItemsType[] = [
    {
      time: 10,
      label: '10秒',
    },
    {
      time: 30,
      label: '30秒',
    },
    {
      time: 60,
      label: '1分',
    },
    {
      time: 180,
      label: '3分',
    },
    {
      time: 300,
      label: '5分',
    },
    {
      time: 600,
      label: '10分',
    },
  ];

  var buttons = controlItems.map((controlItem) => {
    return (
      <Button
        key={controlItem.time}
        onClick={() => {
          dispatch(setCustomTime(controlItem.time));
        }}
        className={styles.button}
      >
        {controlItem.label}
      </Button>
    );
  });

  return <div className={styles.root + ' ' + styles[colorMode]}>{buttons}</div>;
}
