import { useState, useMemo, useEffect } from 'react';

import { IData, INormalaizedData } from 'types';

type TSlotsHook = () =>
  {
    data: INormalaizedData[] | undefined;
    loading: boolean;
    error: any | null;
  }


const useSlots: TSlotsHook = () => {
  const [data, setData] = useState<IData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const fetchData = async (): Promise<void> => {
    setLoading(true);

    await fetch(`/slots`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => setError(exception));

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const normalizedData: INormalaizedData[] | undefined = useMemo(() => {
    if (data) {
      return data.map((item) => ({
        ...item,
        slots: item.time_slots.reduce((acc: any, curr) => {
          const group = curr.start_time.split('T')[0]
          return { ...acc, [group]: [...(acc[group] || []), curr] };
        }, {}),
      }));
    }
  }, [data]);

  return { data: normalizedData, loading, error };
};

export { useSlots };
