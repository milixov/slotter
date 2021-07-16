import React from 'react';

//components
import { Company, Slots } from 'componetns';

//hooks
import { useSlots } from 'hooks/useDatabase';

//style
import styles from './style.module.css';

const PlanPage: React.FC = () => {
  const { data, loading, error } = useSlots();

  return (
    <div>
      <header className={styles.header}>
        <h1>slotter</h1>
        <p>Organize your days without any conflict</p>
      </header>
      <div className={styles.wrapper}>
        {error && <code>{error}</code>}
        {loading && <p>loading...</p>}
        <div className={styles.container}>
          {data &&
            Array.isArray(data) &&
            data?.map((item) => (
              <Company
                key={`c_${item.id}`}
                title={item.name}
                companyId={item.id}
              >
                {Object.keys(item.slots).map((group) => (
                  <Slots
                    key={`c_${item.id}_g_${group}`}
                    companyId={item.id}
                    title={group}
                    data={item.slots[group]}
                  />
                ))}
              </Company>
            ))}
        </div>
      </div>
    </div>

  );
};

export default PlanPage;
