import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/utils/bcryt';
import { userInfo } from 'os';
import { use } from 'passport';
import { errorCode, successCode } from 'src/utils/customRes';

@Injectable()
export class UserService {
  model = new PrismaClient()
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    try {
      const data = await this.model.user.findMany({
        select: {
          user_id: true,
          full_name: true,
          email: true,
          pass_word: true
        }
      })
      return successCode(data)
    } catch (error) {
      return errorCode(error)
    }

  }

  async findOne(id: number) {
    return await this.model.user.findUnique({
      where: {
        user_id: id
      }
    });
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    let { email, full_name, pass_word } = updateUserDto
    return this.model.user.update({
      where: {
        user_id: id
      },
      data: {
        email, full_name, pass_word: hashPassword(pass_word)
      }
    })
  }

  async remove(id: number) {

    const checkId = await this.model.user.findUnique({
      where: {
        user_id: id
      }
    })
    if (!checkId) {
      return "tai khoan khong ton tai"
    }
    const passRemove = hashPassword("daXoa@1231")
    const remove = await this.model.user.update({
      where: {
        user_id: id
      },
      data: {
        pass_word: passRemove,
      }
    });

    return { status: "Xoa thanh cong", remove }
  }
}
