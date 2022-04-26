import { Module, forwardRef } from '@nestjs/common';

import { SolanaController } from './solana.controller';
// import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    // forwardRef(() => ConfigModule)
  ],
  providers: [],
  controllers: [SolanaController],
  exports: []
})
export class SolanaModule { }
