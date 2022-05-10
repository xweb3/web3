import { Module, forwardRef } from '@nestjs/common';

import { CoingeckoController } from './coingecko.controller';
// import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    // forwardRef(() => ConfigModule)
  ],
  providers: [],
  controllers: [CoingeckoController],
  exports: []
})
export class CoingeckoModule { }
