import { ApiProperty } from "@nestjs/swagger";

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    File: any // phải đúng với key khai báo tham số 1 bên FileInterceptor
}
export class dataFileUploadDto {

    files?: any

    @ApiProperty()
    user_id: number

    typeOfFile?: string
}