import axios from 'axios';
// export type IArgs = [input: RequestInfo, init?: RequestInit]
export const fetcher = (url: string, options: any) => axios.post(url, options) // .then((res) => res.json())