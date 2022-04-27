import axios from 'axios';
export type IArgs = [input: RequestInfo, init?: RequestInit]
export const fetcher = (...args: IArgs) => fetch(...args).then(res => res.json());

export const post = (url: string, options: any) => {
  console.log('post', url, options);
  return axios({url, ...options })
}