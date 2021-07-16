/* eslint-disable react/prop-types */
import React from 'react';

//components
import { Reserve } from 'componetns';

//types
import {ITimeSlot} from 'types'

//style
import styles from './style.module.css';

interface ICompany {
  title: string;
  selectedSlot?: ITimeSlot | null;
  children: React.ReactNode;
}

const Company: React.FC<ICompany> = (props) => {
  const { title, children, selectedSlot } = props;

  return (
    <section className={styles.company}>
      <h2>{title}</h2>
      <Reserve 
        slot={selectedSlot}
        onCancelReserve={(value: ITimeSlot) => console.log(value)}
      />
      <div className={styles.slotList}>{children}</div>
    </section>
  );
};

export default Company;
