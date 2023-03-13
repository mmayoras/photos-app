import { useState, useEffect } from 'react';

import { getLocalStorageNumber } from '../utils/localStorage';

export const usePageLocalStorage = (
  key: string,
  defaultValue: number,
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [page, setPage] = useState<number>(() => getLocalStorageNumber(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, page.toString());
  }, [key, page]);

  return [page, setPage];
};
