import { Injectable } from '@nestjs/common';
import { CreateCmtDto } from './dto/create-cmt.dto';
import { UpdateCmtDto } from './dto/update-cmt.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CmtService {
  create(createCmtDto: CreateCmtDto) {
    return 'This action adds a new cmt';
  }
  model = new PrismaClient()

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
    return `This action returns a #${id} cmt`;
  }

  update(id: number, updateCmtDto: UpdateCmtDto) {
    return `This action updates a #${id} cmt`;
  }

  remove(id: number) {
    return `This action removes a #${id} cmt`;
  }
}
