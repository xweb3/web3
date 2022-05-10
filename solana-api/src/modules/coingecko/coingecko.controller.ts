import {
  Controller,
  Post,
  Body,
  Get
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ping, simplePrice, simpleTokenPrice, supportedVsCurrencies } from './coingecko-api';

export type RpcResponse = {
  jsonrpc: string;
  result: object;
  id: number;
}

@ApiBearerAuth()
@ApiTags('Coingecko API')
@Controller('api/coins')
export class CoingeckoController {
  constructor() { }

  @Get('ping')
  @ApiOperation({ summary: 'Check API server status' })
  async pingCoins() {
    return await ping()
  }

  @Get('simple/price')
  @ApiOperation({ summary: 'Check API server status' })
  async simplePriceCoins(options: {
    ids: string;
    vs_currencies: string;
    include_market_cap?: string;
    include_24hr_vol?: string;
    include_24hr_change?: string;
    include_last_updated_at?: string;
  }) {
    return await simplePrice(options)
  }

  @Get('simple/token_price')
  @ApiOperation({ summary: 'Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.' })
  async simpleTokenPriceCoins(options: {
    id: string;
    contract_addresses: string;
    vs_currencies: string;
    include_market_cap?: string;
    include_24hr_vol?: string;
    include_24hr_change?: string;
    include_last_updated_at?: string;
  }) {
    return await simpleTokenPrice(options)
  }

  @Get('simple/supported_vs_currencies')
  @ApiOperation({ summary: 'Get list of supported_vs_currencies.' })
  async supportedVsCurrency() {
    return await supportedVsCurrencies()
  }
}


