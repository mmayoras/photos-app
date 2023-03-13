import axios, { AxiosResponse } from 'axios';

import { PhotoResponse } from '../../types/Photo';

export type Method = 'get' | 'post';

export const ApiRequest = ({
  path,
  method,
  data,
}: {
  path: string;
  method: Method;
  data?: object;
}): Promise<PhotoResponse> => {
  return axios
    .request({
      url: `http://localhost:3001/${path}`,
      method,
      data,
    })
    .then((res: AxiosResponse) => res.data);
};
