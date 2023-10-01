import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/auth.dto';

import { ApiTags } from '@nestjs/swagger';
import { SignUpType } from './entities/auth.entity';
@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(200)
  @Post("/login")
  login(@Body() body: UserLoginDto) {
    return this.authService.login(body);
  }
  @HttpCode(200)
  @Post("/signup")
  signUp(@Body() body: SignUpType) {
    return this.authService.signUp(body);

  }
}
