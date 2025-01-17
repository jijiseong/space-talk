import { Injectable } from '@nestjs/common';
import { PrismaService } from '../databases/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create({ email, username }: { email: string; username: string }) {
    return await this.prisma.user.create({
      data: {
        email,
        username,
      },
    });
  }

  async findOrCreate({ email, username }: { email: string; username: string }) {
    return await this.prisma.user.upsert({
      where: { email },
      create: { email, username },
      update: {},
    });
  }
}
