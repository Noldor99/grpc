import {
  DeviceServiceControllerMethods,
  DeviceServiceController,
  RemoveDeviceRequest,
  Device,
} from '@app/common/types/device';
import { Controller } from '@nestjs/common';
import { CreateDeviceRequest } from 'proto/device';

import { DeviceService } from './device.service';

@Controller('device')
@DeviceServiceControllerMethods()
export class DeviceController implements DeviceServiceController {
  constructor(private readonly deviceService: DeviceService) {}

  createDevice(createDeviceDto: CreateDeviceRequest): Promise<Device> {
    return this.deviceService.create(createDeviceDto);
  }

  async removeDevice(removDevicedto: RemoveDeviceRequest) {
    return await this.deviceService.remove(removDevicedto.id);
  }
}
