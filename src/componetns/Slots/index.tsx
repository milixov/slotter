/* eslint-disable react/prop-types */
import React from 'react';

//style
import styles from './style.module.css';

//types
import { ITimeSlots } from 'types';

interface ISlots {
  id: string;
  title: string;
  data: ITimeSlots[];
}

const Slots: React.FC<ISlots> = (props) => {
  const { id, title, data } = props;

  return (
    <div>
      <h4 className={styles.group}>{title}</h4>
      {data.map((slot: ITimeSlots, slotIndex: number) => (
        <div key={`${id}_slot_${slotIndex}`}>
          <p>{slot.start_time}</p>
          <p>{slot.end_time}</p>
          <p>______________</p>
        </div>
      ))}
    </div>
  );
};

export default Slots;
