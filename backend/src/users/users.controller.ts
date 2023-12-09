import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly user: UsersService) {}

  @Post('create')
  async create(@Body() data: CreateUserDto) {
    return this.user.createUser(data);
  }

  @Get('find')
  async findAll() {
    return this.user.findAll();
  }

  @Delete('delete/:id')
  async deleteUsr(@Param('id') userId: string) {
    return this.user.deleteUsr(userId);
  }
}
