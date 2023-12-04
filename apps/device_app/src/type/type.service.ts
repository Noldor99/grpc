import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/device_app/prisma.service';
import { Type } from '@app/common/types/device';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable()
export class TypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    const { name } = createTypeDto;
    return this.prismaService.type.create({
      data: {
        name,
      },
    });
  }

  async remove(id: number): Promise<{ message: string }> {
    const existingType = await this.prismaService.type.findUnique({
      where: { id },
    });

    if (!existingType) {
      return { message: `Type with ID ${id} not found` };
    }

    await this.prismaService.type.delete({
      where: { id },
    });

    return { message: 'Type removed successfully' };
  }
}
