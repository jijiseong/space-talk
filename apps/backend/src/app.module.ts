import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { googleConfig, jwtConfig } from './configuration';
import { UserModule } from './user/user.module';
import { AuthModule } from './user/auth/auth.module';
import { GoogleModule } from './user/auth/google/google.module';
import { GoogleController } from './user/auth/google/google.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [googleConfig, jwtConfig],
    }),
    GoogleModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService],
})
export class AppModule {}
