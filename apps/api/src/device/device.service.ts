import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  CreateDeviceRequest,
  DeviceServiceClient,
  DEVICE_SERVICE_NAME,
  RemoveDeviceRequest,
} from '@app/common/types/device';
import { DEVICE_SERVICE } from '../constant/constants';

@Injectable()
export class DeviceService {
  private deviceService: DeviceServiceClient;

  constructor(@Inject(DEVICE_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.deviceService =
      this.client.getService<DeviceServiceClient>(DEVICE_SERVICE_NAME);
  }

  async create(createDeviceDto: CreateDeviceRequest) {
    return this.deviceService.createDevice(createDeviceDto);
  }

  async remove(id: number) {
    const request: RemoveDeviceRequest = { id };

    try {
      return this.deviceService.removeDevice(request);
    } catch (error) {
      // Handle error appropriately
      console.error('Error removing device:', error);
      throw new InternalServerErrorException('Error removing device');
    }
  }
}
