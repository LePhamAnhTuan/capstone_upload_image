import { ApiProperty } from "@nestjs/swagger"
export class SignUpType {

    @ApiProperty()
    user_id: number

    @ApiProperty()
    email: string

    @ApiProperty()
    password: string

    @ApiProperty()
    full_name: string

    @ApiProperty()
    age: number

    @ApiProperty()
    avatar: string


}
export type LogInType = {

    email: string,
    password: string,

}