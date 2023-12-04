import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/device_app/prisma.service';
import { Brand } from '@app/common/types/device';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const { name } = createBrandDto;
    return this.prismaService.brand.create({
      data: {
        name,
      },
    });
  }

  async getBrandById(id: number): Promise<Brand | null> {
    return this.prismaService.brand.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<{ message: string }> {
    const existingBrand = await this.prismaService.brand.findUnique({
      where: { id },
    });

    if (!existingBrand) {
      return { message: `Brand with ID ${id} not found` };
    }

    await this.prismaService.brand.delete({
      where: { id },
    });

    return { message: 'Brand removed successfully' };
  }
}
