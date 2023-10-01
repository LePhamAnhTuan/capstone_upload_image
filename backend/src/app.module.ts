import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './strantegy/jwt.strantegy';
import { CmtModule } from './cmt/cmt.module';

import { DbImageModule } from './db_image/db_image.module';

@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CmtModule,
    DbImageModule,
    DbImageModule,
    DbImageModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})

export class AppModule { }

let abc = new AppModule()

// OOP
// Module gốc

// @Module, @ => decorator