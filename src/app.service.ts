import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async postHello() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Alice',
      },
    });
    return user;
  }
}
