import React from 'react';

//style
import styles from './style.module.css';

interface ICompany {
    title: string;
    children: React.ReactNode;
}

const Company: React.FC<ICompany> = (props) => {
    const { title, children } = props;

    return (
        <section className={styles.company}>
            <h2>{title}</h2>
            <h3>select a time for reservation</h3>
            <div className={styles.slotList}>{children}</div>
        </section>
    );
};

export default Company;
