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
import { getTokensData } from './pngfi-api';


@ApiBearerAuth()
@ApiTags('pngfi API')
@Controller('api/pngfi')
export class PngfiController {
  constructor() { }

  @Get('getTokensData')
  @ApiOperation({ summary: '获取 TOKEN' })
  async getTokens() {
    return await getTokensData()
  }

}

