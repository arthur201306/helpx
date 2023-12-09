import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const existsUser = await this.prisma.userHelpX.findFirst({
      where: {
        id: data.id,
      },
    });

    if (existsUser) {
      throw new Error('User already exists');
    }

    const newUser = this.prisma.userHelpX.create({
      data,
    });

    return newUser;
  }

  async findAll() {
    return this.prisma.userHelpX.findMany();
  }

  async deleteUsr(id: string) {
    const existsUser = await this.prisma.userHelpX.findFirst({
      where: {
        id,
      },
    });

    if (!existsUser) {
      throw new Error('User not found');
    }

    return await this.prisma.userHelpX.delete({
      where: {
        id,
      },
    });
  }
}
