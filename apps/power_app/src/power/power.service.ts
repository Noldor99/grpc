import { Injectable } from '@nestjs/common';
import { CreatePowerdto } from '@app/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PowerService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPowerDto: CreatePowerdto) {
    const { power } = createPowerDto;
    return this.prismaService.power.create({
      data: { power },
    });
  }

  async remove(id: number) {
    const existingPower = await this.prismaService.power.findUnique({
      where: { id },
    });

    if (!existingPower) {
      return { message: `Power with ID ${id} not found` };
    }

    await this.prismaService.power.delete({
      where: { id },
    });

    return { message: 'Power removed successfully' };
  }
}
