import { Controller } from '@nestjs/common';
import { TypeService } from './type.service';
import {
  TypeServiceControllerMethods,
  TypeServiceController,
  CreateTypeRequest,
  RemoveTypeRequest,
  Type,
} from '@app/common/types/device';

@Controller('type')
@TypeServiceControllerMethods()
export class TypeController implements TypeServiceController {
  constructor(private readonly typeService: TypeService) {}

  createType(createTypeDto: CreateTypeRequest): Promise<Type> {
    return this.typeService.create(createTypeDto);
  }

  removeType(removTypedto: RemoveTypeRequest) {
    return this.typeService.remove(removTypedto.id);
  }
}
