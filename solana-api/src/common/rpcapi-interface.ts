import { IsArray, IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IEncoding, IRPCAction } from './types';

export class IOptionsInterface {
  @ApiProperty()
  @IsNumberString()
  id: string;

  @ApiProperty()
  @IsString()
  method?: IRPCAction;

  @ApiProperty()
  @IsString()
  publicKey?: string;

  @ApiProperty()
  @IsString()
  encoding?: IEncoding;

  @ApiProperty()
  @IsString()
  jsonrpc?: string;

  @ApiProperty()
  params?: any; // object | string[];
}