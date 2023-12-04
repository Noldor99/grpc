import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@ApiTags('device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deviceService.remove(+id);
  }
}
