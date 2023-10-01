import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { LogInType, SignUpType } from './entities/auth.entity';
import { deCodePassword, hashPassword } from 'src/utils/bcryt';
import { count } from 'console';
@Injectable()
export class AuthService {

    constructor(

        private jwtService: JwtService,

    ) { }

    model = new PrismaClient();

    async login(body: LogInType) {
        let { email, password } = body;
        // kiểm tra email trùng

        let checkEmail = await this.model.user.findFirst({
            where: {
                email
            }
        })
        if (!checkEmail) {
            return "Email không tồn tại!!"
        }

        // trùng email => kiểm tra tiếp password

        let checkPass = deCodePassword(password, checkEmail.pass_word)
        let checkRemove = deCodePassword("daXoa@1231", checkEmail.pass_word)
        if (checkRemove) {
            return "Tài khoản đang trong tiến trình xóa khỏi hệ thống!! Vui lòng thử lại"
        }
        if (!checkPass) {
            return "Mật khẩu không chính xác"
        }



        let token = this.jwtService.sign({ data: checkEmail }, { expiresIn: "50m", secret: "!@#QWE123qwe" });
        return {
            status: "Thành công",
            statusCode: "200",
            Token: token
        };

    }

    async signUp(body: SignUpType) {
        let { user_id, email, password, full_name, age, avatar } = body;
        // kiểm tra email trùng
        let checkEmail = await this.model.user.findFirst({
            where: {
                email
            }
        })
        // trùng => báo email trùng
        if (checkEmail) {
            return "Email đã tồn tại!"
        }

        // ko trùng => thêm mới user
        let pass_word = hashPassword(password).toString()
        let createUSer = await this.model.user.create({

            data: { user_id, email, pass_word: pass_word, full_name, tuoi: age, avatar }
        })
        return {
            status: "Thành công",
            respon: createUSer
        }

    }
}
