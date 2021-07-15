import React, { useEffect } from 'react';

//components
import { Company, Slots } from 'componetns';

//hooks
import { useSlots } from 'hooks/useDatabase';

//style
import styles from './style.module.css';

const PlanPage: React.FC = () => {
    const [fetchData, { data, loading, error }] = useSlots();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1>Plan your day</h1>
            {error && (
                <p>
                    Json Server is not running, please enter
                    <code>npm run database</code>
                    in command line
                </p>
            )}
            {loading && <p>loading...</p>}
            <div className={styles.container}>
                {data &&
                    Array.isArray(data) &&
                    data.map((item) => (
                        <Company key={`company_${item.id}`} title={item.name}>
                            {Object.keys(item.slots).map((group) => (
                                <Slots
                                    key={`company_${item.id}_group_${group}`}
                                    id={`company_${item.id}_group_${group}`}
                                    title={group}
                                    data={item.slots[group]}
                                />
                            ))}
                        </Company>
                    ))}
            </div>
        </div>
    );
};

export default PlanPage;
