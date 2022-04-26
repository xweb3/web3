export type IArgs = [input: RequestInfo, init?: RequestInit]
export const fetcher = (...args: IArgs) => fetch(...args).then((res) => res.json())