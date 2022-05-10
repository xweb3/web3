import { fetcher } from '../../common/fetcher';

const baseApi = 'https://api.png.fi';
const baseApi2 = 'https://ssc-dao.genesysgo.net';

export const tokensApi = `${baseApi}/tokens`
export const getTokensData = async () => {
  const data = await fetcher(tokensApi);
  return data
}

export const poolsApi = `${baseApi}/pools`
export const getPoolsData = async () => {
  const { data } = await fetcher(poolsApi);
  return data
}

export const marketsApi = `${baseApi}/markets`
export const getMarketsData = async () => {
  const { data } = await fetcher(marketsApi);
  return data
}

export const pricesApi = (ids: string[]) => `${baseApi}/prices/${ids.join(',')}`
export const getPricesData = async (ids: string[]) => {
  const { data } = await fetcher(pricesApi(ids));
  return data
}

export const bondingApi = `${baseApi}/bonding`
export const getBondingData = async () => {
  const { data } = await fetcher(bondingApi);
  return data
}

export const stakingApi = `${baseApi}/staking`
export const getStakingData = async () => {
  const { data } = await fetcher(stakingApi);
  return data
}

export const sscDaoApi = `${baseApi2}`
export const getSscDaoData = async () => {
  const { data } = await fetcher(sscDaoApi, {
    method: 'POST'
  });
  return data
}

export const getAllSideData = async () => ({
  [pricesApi(['USDC', 'UM'])]: await getPricesData(['USDC', 'UM']),
})