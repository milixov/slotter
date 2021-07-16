/* eslint-disable react/prop-types */
import React, {useContext, useMemo} from 'react';

//store
import {Context, C} from 'store'

//components
import { Reserve } from 'componetns';

//types
import {ISelectedSlot} from 'types'

//style
import styles from './style.module.css';

interface ICompany {
  companyId: number
  title: string;
  children: React.ReactNode;
}

const Company: React.FC<ICompany> = (props) => {
  const { companyId, title, children } = props;
  const [state, dispatch] = useContext(Context)

  const selectedSlot = useMemo(() => {
    return state.find(item => item.companyId === companyId)
  }, [state, companyId])

  return (
    <section className={styles.company}>
      <h2 className={styles.companyTitle}>{title}</h2>
      <Reserve 
        selectedSlot={selectedSlot}
        onCancelReserve={(value: ISelectedSlot) => dispatch({type: C.SELECT_SLOT, value })}
      />
      <div className={styles.slotList}>{children}</div>
    </section>
  );
};

export default Company;
