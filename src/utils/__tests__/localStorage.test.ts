import { getLocalStorageNumber, getLocalStorageString } from '../localStorage';

const TEST_KEY = 'key';
const TEST_STRING_VALUE = 'test';
const TEST_NUMBER_VALUE = 1;

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
    },
  });
});

describe('getLocalStorageNumber', () => {
  it('should call localStorage getItem', () => {
    const testNumber: number = getLocalStorageNumber(TEST_KEY, TEST_NUMBER_VALUE);

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(testNumber).toEqual(TEST_NUMBER_VALUE);
  });
});

describe('getLocalStorageString', () => {
  it('should call localStorage getItem', () => {
    const testString: string = getLocalStorageString(TEST_KEY, TEST_STRING_VALUE);

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(testString).toEqual(TEST_STRING_VALUE);
  });
});
