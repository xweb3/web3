import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoingeckoModule } from './modules/coingecko/coingecko.module';
import { PngfiModule } from './modules/pngfi/pngfi.module';
import { SolanaModule } from './modules/solana/solana.module';
// import { RedisConfigModule } from './modules/config/redis.module';
// import { DatabaseConfigModule } from './modules/config/database.module';

@Module({
  imports: [
    // DatabaseConfigModule.forRoot({}),
    // RedisConfigModule,
    SolanaModule,
    PngfiModule,
    CoingeckoModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule implements NestModule {
  constructor() { }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes('api/*');
  }
}
