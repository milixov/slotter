import React, {useContext} from 'react';

//store
import { Context, C } from 'store'

//components
import { Company, Slots } from 'componetns';

//hooks
import { useSlots } from 'hooks/useDatabase';

//style
import styles from './style.module.css';

const PlanPage: React.FC = () => {
  const { data, loading, error } = useSlots();
  const [state, dispatch] = useContext(Context)

  return (
    <div className={styles.wrapper}>
      {JSON.stringify(state)}
      <h1>Plan your day</h1>
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
  );
};

export default PlanPage;
