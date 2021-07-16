import React from 'react';
import moment from 'moment';

//types
import { ISelectedSlot } from 'types'

//style
import styles from './style.module.css'

interface IReserve {
  selectedSlot?: ISelectedSlot | undefined;
  onCancelReserve: any;
}

const Reserve: React.FC<IReserve> = (props) => {
  const { selectedSlot, onCancelReserve } = props

  return (
    <div className={styles.container}>
      {!selectedSlot &&
        <p className={styles.message}>Select slot for reservation</p>
      }
      {
        selectedSlot && selectedSlot?.slot &&
          <div className={styles.slot}>
            <p>{`${moment(selectedSlot.slot.start_time).format('HH:mm')}-${moment(selectedSlot.slot.end_time).format('HH:mm')} | `}</p>
            <span>{`${moment(selectedSlot.slot.start_time).format('dddd D MMM YYYY')}`}</span>
          </div>
      }
      {
        selectedSlot && <button onClick={() => onCancelReserve(selectedSlot)}>cancel reserve</button>
      }
    </div>
  );
};

export default Reserve;
