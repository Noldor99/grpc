import { Controller } from '@nestjs/common';
import { Brand } from '@prisma/client';
import {
  BrandServiceControllerMethods,
  BrandServiceController,
  CreateBrandRequest,
  RemoveBrandRequest,
  GetBrandByIdRequest,
} from '@app/common/types/device';
import { BrandService } from './brand.service';

@Controller('brand')
@BrandServiceControllerMethods()
export class BrandController implements BrandServiceController {
  constructor(private readonly brandService: BrandService) {}

  createBrand(createBrandDto: CreateBrandRequest): Promise<Brand> {
    return this.brandService.create(createBrandDto);
  }

  async getBrandById(getBrandByIdRequest: GetBrandByIdRequest) {
    return this.brandService.getBrandById(getBrandByIdRequest.id);
  }

  async removeBrand(removBranddto: RemoveBrandRequest) {
    return await this.brandService.remove(removBranddto.id);
  }
}
