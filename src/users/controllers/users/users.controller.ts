import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUserDto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Get()
  async index() {
    const users = await this.usersService.fetchUsers();
    return users;
  }
}
