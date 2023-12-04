import {
  CreateTypeRequest,
  RemoveTypeRequest,
  TypeServiceClient,
  TYPE_SERVICE_NAME,
} from '@app/common/types/device';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { DEVICE_SERVICE } from '../constant/constants';

@Injectable()
export class TypeService {
  private typeService: TypeServiceClient;

  constructor(@Inject(DEVICE_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.typeService =
      this.client.getService<TypeServiceClient>(TYPE_SERVICE_NAME);
  }

  async create(createTypeDto: CreateTypeRequest) {
    return this.typeService.createType(createTypeDto);
  }

  async remove(id: number) {
    const request: RemoveTypeRequest = { id };

    try {
      return this.typeService.removeType(request);
    } catch (error) {
      // Handle error appropriately
      console.error('Error removing type:', error);
      throw new InternalServerErrorException('Error removing type');
    }
  }
}
