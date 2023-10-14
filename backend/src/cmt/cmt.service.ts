import { Injectable } from '@nestjs/common';
import { CreateCmtDto } from './dto/create-cmt.dto';
import { UpdateCmtDto } from './dto/update-cmt.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CmtService {
  model = new PrismaClient()

  create(createCmtDto: CreateCmtDto) {
    return this.model.comment.create({
      data: createCmtDto
    });
  }

  findAll(id) {

    return this.model.comment.findMany({
      where: {
        user_id: +id
      },
      include: {
        img: {
          select: {
            img_name: true,
          },
        },
        user: {
          select: {
            email: true
          }
        }
      }

    })
  }

  findOne(id: number) {
    return this.model.comment.findFirst({
      where: {
        user_id: +id
      }

    });
  }

  update(id: number, updateCmtDto: UpdateCmtDto) {
    return `This action updates a #${id} cmt`;
  }

  remove(id: number) {
    return `This action removes a #${id} cmt`;
  }
}
