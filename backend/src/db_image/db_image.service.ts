import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import fs from "fs";
import { unlink } from 'node:fs/promises';
import { uploadImage, uploadVideo } from 'src/utils/cloudinary';
import { CreateDbImageDto } from './dto/create-db_image.dto';
import { UpdateDbImageDto } from './dto/update-db_image.dto';
import { dataFileUploadDto } from './dto/upload.dto';
import { errorCode, successCode } from 'src/utils/customRes';


@Injectable()
export class DbImageService {
  model = new PrismaClient()

  async uploadImage(file: any, id: number) {
    if (!file) {
      return "error";
    }
    const upCloud: any = await uploadImage(`./public/img/${file.filename}`)
    const { url, asset_id, width, height, format, created_at } = upCloud
    const upload = await this.model.img.create({
      data: {
        user_id: id,
        url: `${url}`,
        img_name: file.filename,
        description: `${asset_id} ${created_at} ${width} ${height} ${format} `
      },
    })
    await unlink(process.cwd() + `/public/img/${file.filename}`);

    return upload


  }

  async uploadVideo(file: any, id: number) {
    let { filename, originalname, path } = file
    const upCloud: any = await uploadVideo(`./public/video/${filename}`)
    const { url, asset_id, width, height, format, created_at } = upCloud
    const upload = await this.model.video.create({
      data: {
        user_id: id,
        url: `${url}`,
        video_name: filename,
        description: `${asset_id} ${created_at} ${width} ${height} ${format} `
      },
    })

    await unlink(process.cwd() + `/public/video/${filename}`);
    return upload
  }


  create(createDbImageDto: CreateDbImageDto) {
    return 'This action adds a new dbImage';
  }



  async findAll() {
    try {
      const data = await this.model.img.findMany({
        select: {
          user_id: true,
          comment: true,
          img_id: true,
          img_name: true,
          description: true,
          url: true,

        }
      })
      return successCode(data)
    } catch (error) {
      return errorCode(error)
    }


  }

  findOne(id: number) {
    return this.model.img.findMany({
      where: {
        user_id: +id,
      }
    });
  }
  findAllVideo() {
    return this.model.video.findMany({

    });
  }

  findOneVideo(id: number) {
    return this.model.video.findMany({
      where: {
        user_id: +id,
      }
    });
  }


  update(id: number, updateDbImageDto: UpdateDbImageDto) {
    return `This action updates a #${id} dbImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} dbImage`;
  }
}
