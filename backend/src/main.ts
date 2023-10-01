import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*" }); // CORS() cho phép FE truy cập vào BE
  app.use(express.static("."));

  const config = new DocumentBuilder().setTitle("Node 33").setVersion("1.1.3")
    .addBearerAuth()
    // .addApiKey({ type: 'http', name: 'tokenCyber', in: 'header' }, 'tokenCyber')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(8080);
}
bootstrap();

// index.js

// yarn start
// nodemon => yarn start:dev

// đối tượng => 3 module => [tên đối tượng].[tên module].ts
// module: giúp kết nối controller, service của đối tượng đó và kết nối module của đối tượng khác lại với nhau
// controller: tạo API 
// service: Xử lý chức năng

// DTO => Data transfer object
// entities (object)


// food
// nest g resource food --no-spec

// B1: yarn add prisma @prisma/client
// B2: yarn prisma init
// B3: sửa lại chuỗi kết nối và schema.prisma mục provider
// B4: yarn prisma db pull
// B5: yarn prisma generate


// Auth => 3 module
// nest g resource auth --no-spec

// yarn add @nestjs/swagger swagger-ui-express


// yarn add @nestjs/passport passport passport-local  @nestjs/jwt passport-jwt @types/passport-jwt