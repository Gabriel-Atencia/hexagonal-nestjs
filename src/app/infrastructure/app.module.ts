import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import config from './config/config';
import { environments } from './config/enviroments';
import { validationSchema } from './config/validation-schema';
import { GlobalMiddleware } from './middlewares/global.middleware';

// Modules
import { CommonModule } from './common.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/modules/user/infrastructure/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV],
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
    CommonModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GlobalMiddleware).forRoutes('*');
  }
}
