/* eslint-disable react/prop-types */
import React,{useContext} from 'react';
import moment from 'moment';

//store
import {Context, C} from 'store'

//style
import styles from './style.module.css';

//types
import { ITimeSlot } from 'types';

interface ISlots {
  companyId: number;
  title: string;
  data: ITimeSlot[];
}

const Slots: React.FC<ISlots> = (props) => {
  const { companyId, title, data } = props;
  const [state, dispatch] = useContext(Context)

  return (
    <div>
      <h4 className={styles.group}>{moment(title).format('dddd D MMM YYYY')}</h4>
      <div className={styles.daySlots}>
        {data?.map((slot: ITimeSlot, slotIndex: number) => (
          <p
            onClick={() => dispatch({type: C.SELECT_SLOT, value: {companyId, slot}})} 
            className={styles.slot} 
            key={`c${companyId}_g${title}s_${slotIndex}`}
          >
            {`${moment(slot.start_time).format('HH:mm')} - ${moment(slot.end_time).format('HH:mm')}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Slots;
