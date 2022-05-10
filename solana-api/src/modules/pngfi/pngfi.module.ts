import { Module, forwardRef } from '@nestjs/common';

import { PngfiController } from './pngfi.controller';
// import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    // forwardRef(() => ConfigModule)
  ],
  providers: [],
  controllers: [PngfiController],
  exports: []
})
export class PngfiModule { }
