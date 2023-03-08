import { useState, useEffect } from 'react';

import { getLocalStorageString } from '../utils/localStorage';

export const useSearchQueryLocalStorage = (
  key: string,
  defaultValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [searchQuery, setSearchQuery] = useState<string>(() =>
    getLocalStorageString(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, searchQuery);
  }, [key, searchQuery]);

  return [searchQuery, setSearchQuery];
};
