import { ApiProperty } from "@nestjs/swagger"

export class CreateCmtDto {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    img_id: number

    @ApiProperty()
    cmt_id: number

    @ApiProperty()
    date_cmt: string

    @ApiProperty()
    content: string

}
