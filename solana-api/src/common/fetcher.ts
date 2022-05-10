import axios from 'axios';
// import fetch from 'node-fetch';
export type IArgs = [input: RequestInfo, init?: RequestInit]
// export const fetcher = (url, args) => fetch(url, args).then(res => res.json());

export const fetcher = (url: string, options: any = {
  accept: 'application/json'
}) => {
  console.log('post', url, options);
  return axios.request({url, ...options })
}