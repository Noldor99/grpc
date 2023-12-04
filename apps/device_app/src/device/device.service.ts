import { Injectable } from '@nestjs/common';
import { CreateDeviceRequest, Device } from '@app/common/types/device';
import { PrismaService } from 'apps/device_app/prisma.service';

@Injectable()
export class DeviceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDeviceDto: CreateDeviceRequest): Promise<Device> {
    const { name, price, rating, brandId, typeId } = createDeviceDto;

    const createData: any = {
      name,
      price,
      rating,
    };

    if (brandId !== undefined) {
      createData.brand = {
        connect: { id: brandId },
      };
    }

    if (typeId !== undefined) {
      createData.type = {
        connect: { id: typeId },
      };
    }

    return await this.prismaService.device.create({
      data: createData,
    });
  }

  async remove(id: number) {
    const existingDevice = await this.prismaService.power.findUnique({
      where: { id },
    });

    if (!existingDevice) {
      return { message: `Device with ID ${id} not found` };
    }

    await this.prismaService.power.delete({
      where: { id },
    });

    return { message: 'Device removed successfully' };
  }
}
