import {
  BrandServiceClient,
  BRAND_SERVICE_NAME,
  CreateBrandRequest,
  GetBrandByIdRequest,
  RemoveBrandRequest,
} from '@app/common/types/device';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { DEVICE_SERVICE } from '../constant/constants';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
  private brandService: BrandServiceClient;

  constructor(@Inject(DEVICE_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.brandService =
      this.client.getService<BrandServiceClient>(BRAND_SERVICE_NAME);
  }

  create(createBrandDto: CreateBrandDto) {
    const request: CreateBrandRequest = {
      name: createBrandDto.name,
    };

    return this.brandService.createBrand(request);
  }

  getBrandById(id: number) {
    const request: GetBrandByIdRequest = {
      id,
    };

    return this.brandService.getBrandById(request);
  }

  remove(id: number) {
    const request: RemoveBrandRequest = {
      id,
    };

    return this.brandService.removeBrand(request);
  }
}
