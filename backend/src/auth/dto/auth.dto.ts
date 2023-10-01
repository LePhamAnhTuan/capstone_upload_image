import { ApiProperty } from "@nestjs/swagger"

export type UserInfoDto = {
    userId: number
    email: string,
    password: string,
    full_name: string,

}

export class UserLoginDto {
    @ApiProperty()
    email: string

    @ApiProperty()
    password: string
}