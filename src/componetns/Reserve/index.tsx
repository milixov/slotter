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
        <h3>select a time for reservation</h3>
      }
      {
        selectedSlot && selectedSlot?.slot &&
          <div>
            <h3>{`${moment(selectedSlot.slot.start_time).format('dddd D MMM YYYY')}`}</h3>
            <h3>{`${moment(selectedSlot.slot.start_time).format('HH:mm')}-${moment(selectedSlot.slot.end_time).format('HH:mm')}`}</h3>
          </div>
      }
      {
        selectedSlot && <button onClick={() => onCancelReserve(selectedSlot)}>cancel reserve</button>
      }
    </div>
  );
};

export default Reserve;
