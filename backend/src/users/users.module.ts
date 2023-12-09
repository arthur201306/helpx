import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './users.controller';

@Module({
  controllers: [UserController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
