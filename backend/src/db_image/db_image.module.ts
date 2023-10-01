import { Module } from '@nestjs/common';
import { DbImageService } from './db_image.service';
import { DbImageController } from './db_image.controller';

@Module({
  controllers: [DbImageController],
  providers: [DbImageService],
})
export class DbImageModule { }
