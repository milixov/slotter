import React from 'react';
import moment from 'moment';

//assets
import { ReactComponent as TrashIcon } from 'assets/icon/trash.svg';

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
      {
        !selectedSlot &&
        <p className={styles.message}>Select slot for reservation</p>
      }
      {
        selectedSlot && selectedSlot?.slot &&
        <div className={styles.slot}>
          <p>{`${moment(selectedSlot.slot.start_time).format('HH:mm')}-${moment(selectedSlot.slot.end_time).format('HH:mm')} | `}</p>
          <span>{`${moment(selectedSlot.slot.start_time).format('dddd, D MMMM YYYY')}`}</span>
        </div>
      }
      {
        selectedSlot &&
        <button className={styles.trash} onClick={() => onCancelReserve(selectedSlot)}>
          <TrashIcon />
        </button>
      }
    </div>
  );
};

export default Reserve;
