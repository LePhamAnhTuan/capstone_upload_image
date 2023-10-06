import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    full_name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    pass_word: string
}
