import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'N1ck_s0b3r4n0_20**_F4m1ly',
      database: 'helpx_test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [UserController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
