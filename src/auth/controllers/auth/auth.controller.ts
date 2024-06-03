import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from '../Dtos/autDto';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() authPayload: AuthPayloadDto) {
    return this.authService.validateUser(authPayload);
  }
}
