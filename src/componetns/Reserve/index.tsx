import React from 'react';

//types
import {ITimeSlot} from 'types'

interface IReserve {
  slot?: ITimeSlot | null;
  onCancelReserve: any;
}

const Reserve: React.FC<IReserve> = (props) => {
  const {slot, onCancelReserve} = props

  return (
    <div>
      {
        slot ? <h3>{`${slot.start_time}-${slot.end_time}`}</h3> : <h3>select a time for reservation</h3>
      }
      {
        slot && <button onClick={() => onCancelReserve(slot)}>cancel reserve</button>
      }
    </div>
  );
};

export default Reserve;
