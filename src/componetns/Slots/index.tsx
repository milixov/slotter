/* eslint-disable react/prop-types */
import React, { useContext, useMemo } from 'react';
import moment from 'moment';

//store
import { Context, C } from 'store'

//style
import styles from './style.module.css';

//types
import { ITimeSlot, ITimeSlotBlocked } from 'types';

interface ISlots {
  companyId: number;
  title: string;
  data: ITimeSlot[];
}

const Slots: React.FC<ISlots> = (props) => {
  const { companyId, title, data } = props;
  const [state, dispatch] = useContext(Context)

  const selectedSlot = useMemo(() => {
    return state.find(item => item.companyId === companyId)
  }, [state, companyId])

  const blockedData: ITimeSlotBlocked[] = useMemo(() => {
    const otherReserved = state.filter(item => item.companyId !== companyId)

    return data.map(item => {
      
      let blockersCount = 0
      let startTime = moment(item.start_time)
      let endTime = moment(item.start_time)

      otherReserved.forEach(reserve => {
        const reserveStartTime = moment(reserve.slot.start_time)
        const reserveEndTime = moment(reserve.slot.end_time)
        if(startTime.isSameOrAfter(reserveStartTime) && endTime.isBefore(reserveEndTime)) {
          blockersCount++
        }
        if(endTime.isBetween(reserveStartTime, reserveEndTime)) {
          blockersCount++
        }
      })

      return {...item, block: blockersCount > 0}
    })

  }, [state, data, companyId])

  return (
    <div>
      <h4 className={styles.group}>{moment(title).format('dddd D MMM YYYY')}</h4>
      <div className={styles.daySlots}>
        {blockedData?.map((slot: ITimeSlotBlocked, slotIndex: number) => (
          <p
            onClick={() => dispatch({ type: C.SELECT_SLOT, value: { companyId, slot } })}
            className={`${slot.block && styles.blockSlot} ${!slot.block && styles.slot} ${!slot.block && selectedSlot?.slot.start_time === slot.start_time && selectedSlot?.slot.end_time === slot.end_time && styles.slotSelected}`}
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
