import {
  CreatePowerdto,
  PowerServiceClient,
  POWER_SERVICE_NAME,
} from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { POWER_SERVICE } from '../constant/constants';

@Injectable()
export class PawerService {
  private powerService: PowerServiceClient;

  constructor(@Inject(POWER_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.powerService =
      this.client.getService<PowerServiceClient>(POWER_SERVICE_NAME);
  }

  create(createPawerDto: CreatePowerdto) {
    return this.powerService.createPower(createPawerDto);
  }

  remove(id: number) {
    return this.powerService.removePower({ id });
  }
}
