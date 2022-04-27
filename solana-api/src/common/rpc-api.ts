import _pick from 'lodash/pick';
const querystring = require('querystring');
const qs = require('qs');
// import qs from 'qs';

import  { fetcher } from './fetcher'
import { IEncoding, IRPCAction } from './types'

export const baseUrl = 'http://localhost:8899'
export const basePublicKey = 'C7EnbCVFiF3PdBDRepWXkx8pEKsZiEheLUjQahW845bp'

export type IOptions = {
  id: number | string;
  method: IRPCAction;
  publicKey?: string;
  encoding?: IEncoding;

  jsonrpc?: string;
  params?: any; // object | string[];
}

const getOptions = (options: IOptions) => {
  const { publicKey, encoding, params } = options
  console.log('getOptions params', params)
  options.jsonrpc = '2.0'
  if (publicKey) {
    options.params = [publicKey]
  }
  if (publicKey && encoding) {
    options.params = [
      publicKey,
      {
        "encoding": encoding
      }
    ]
  }
  if (params) {
    options.params = params
  }
  return options // _pick(options, ['jsonrpc', 'id', 'method', 'params'])
}

export const getAction = async (options: IOptions) => {
  console.log('JSON.stringify(options)1', options)
  // if (options.params) {
  //   options.params = JSON.stringify(options.params)
  // }
  console.log('JSON.stringify(options)', JSON.stringify(options))
  try {
    const res = await fetcher(baseUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      data: JSON.stringify(options)
    }).then(response => {
      return response.data
    })

    console.log('res', res);
    return res;

  } catch (err) {
    console.error(err)
  }
}