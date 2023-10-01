import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiBody, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

export class BodyType {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  phone: string
}

@ApiTags("App") // gom nhóm api ở UI swagger
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // request => 2 cách
  // Cách 1: req
  // Cách 2: decorator của nestjs  => nhớ là đã bị khuyên


  // response

  // locahost:8080/demo?id=1&hoTen="anh K" => query
  // locahost:8080/demo/1/K => params

  @ApiBody({ type: BodyType })
  @ApiParam({ name: "id2" })
  @ApiQuery({ name: "id" })
  @Get("/demo/:id2/:hoTen2")
  getDemo(
    @Req() req: Request,

    // @Query("id") id: string, @Query("hoTen") hoTen: string,
    // @Param("id2") id2: string, @Param("hoTen2") hoTen2: string,
    // @Body() body: BodyType
  ) {

    // let { id, hoTen } = req.query;
    // let { id2, hoTen2 } = req.params;
    // let { name, email, phone } = req.body;

    return "demo";
  }

  @Get("/get-hello")
  getHello(): string {
    return this.appService.title;
  }

  // localhost:8080/get-tong/1/2    =>  3

  @Get("/get-tong/:number1/:number2")
  getTong(@Param("number1") soMot: string, @Param("number2") soHai: string): number {
    return this.appService.tinhTong(+soMot, +soHai);
  }

}
