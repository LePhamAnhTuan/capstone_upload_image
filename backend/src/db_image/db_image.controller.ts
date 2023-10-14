import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { DbImageService } from './db_image.service';
import { CreateDbImageDto } from './dto/create-db_image.dto';
import { UpdateDbImageDto } from './dto/update-db_image.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadDto, dataFileUploadDto } from './dto/upload.dto';
@ApiTags("UPLOAD")
@Controller('')
export class DbImageController {
  constructor(private readonly dbImageService: DbImageService) { }
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @Post("/upload-image/:id")
  @UseInterceptors(
    FileInterceptor("file", // key của FE gửi lên
      {
        // định nghĩa nơi lưu và đặt tên mới
        storage: diskStorage({
          destination: process.cwd() + "/public/img",
          filename: (req, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname} `)
        })

      }
    )
  )
  uploadImage(@UploadedFile() file: any, @Param("id") id: number) {

    return this.dbImageService.uploadImage(file, Number(id))
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @Post("/upload-video/:id")
  @UseInterceptors(
    FileInterceptor("File", // key của FE gửi lên

      {
        // định nghĩa nơi lưu và đặt tên mới
        storage: diskStorage({
          destination: process.cwd() + "/public/video",
          filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
        })

      }
    )
  )
  uploadVideo(@UploadedFile() file: Express.Multer.File, @Param("id") id: number) {
    return this.dbImageService.uploadVideo(file, Number(id))
  }


  @Get("/arr-upload-image")
  findAll() {
    return "123"
    // return this.dbImageService.findAll();
  }

  @Get('arr-upload-image/:id')
  findOne(@Param('id') id: string) {
    return this.dbImageService.findOne(Number(id));
  }

  @Get("arr-upload-video")
  findAllVideo() {
    return this.dbImageService.findAllVideo();
  }

  @Get('arr-upload-video/:id')
  findOneVideo(@Param('id') id: string) {
    return this.dbImageService.findOneVideo(Number(id));
  }



  @Delete('arr-upload/:id')
  remove(@Param('id') id: string) {
    return this.dbImageService.remove(+id);
  }
}
