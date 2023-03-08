export const getLocalStorageString = (key: string, defaultValue: string): string => {
  const storedValue: string | null = localStorage.getItem(key);

  return storedValue || defaultValue;
};

export const getLocalStorageNumber = (key: string, defaultValue: number): number => {
  const storageValue: string | null = localStorage.getItem(key);
  const storedValue: number | null =
    storageValue !== null ? Number.parseInt(storageValue, 10) : null;

  return storedValue || defaultValue;
};
