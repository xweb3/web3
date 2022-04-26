import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { SolanaModule } from './modules/solana/solana.module';
// import { RedisConfigModule } from './modules/config/redis.module';
// import { DatabaseConfigModule } from './modules/config/database.module';

@Module({
  imports: [
    // DatabaseConfigModule.forRoot({}),
    // RedisConfigModule,
    SolanaModule
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
