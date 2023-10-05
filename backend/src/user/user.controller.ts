import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiHeader, ApiHeaders, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from "@nestjs/passport"
import { request } from 'http';
import { ExtractJwt } from 'passport-jwt';
import { JwtStrategy } from 'src/strantegy/jwt.strantegy';
@ApiTags("User")
@Controller('user')
// @UseGuards(AuthGuard("jwt"))
// @ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get("/all-users")
  findAll(@Req() request) {
    return request && this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return { id, updateUserDto };
  }

  @Patch('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
