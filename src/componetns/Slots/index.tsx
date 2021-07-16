/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

//style
import styles from './style.module.css';

//types
import { ITimeSlot } from 'types';

interface ISlots {
  company: number;
  title: string;
  data: ITimeSlot[];
}

const Slots: React.FC<ISlots> = (props) => {
  const { company, title, data } = props;

  return (
    <div>
      <h4 className={styles.group}>{moment(title).format('dddd D MMM YYYY')}</h4>
      <div className={styles.daySlots}>
        {data.map((slot: ITimeSlot, slotIndex: number) => (
          <p 
            className={styles.slot} 
            key={`c${company}_g${title}s_${slotIndex}`}
          >
            {`${moment(slot.start_time).format('HH:mm')} - ${moment(slot.end_time).format('HH:mm')}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Slots;
