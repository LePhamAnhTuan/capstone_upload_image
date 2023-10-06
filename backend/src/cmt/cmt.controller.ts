import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CmtService } from './cmt.service';
import { CreateCmtDto } from './dto/create-cmt.dto';
import { UpdateCmtDto } from './dto/update-cmt.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Comments")
@Controller('cmt')
export class CmtController {
  constructor(private readonly cmtService: CmtService) { }

  @Post()
  create(@Body() createCmtDto: CreateCmtDto) {
    return this.cmtService.create(createCmtDto);
  }

  @Get("cmt-by-user/:id")
  findAll(@Param("id") id: string) {
    return this.cmtService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cmtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCmtDto: UpdateCmtDto) {
    return this.cmtService.update(+id, updateCmtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cmtService.remove(+id);
  }
}
