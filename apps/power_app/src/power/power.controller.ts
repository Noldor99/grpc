import { Controller } from '@nestjs/common';
import { PowerService } from './power.service';

import {
  CreatePowerdto,
  PowerServiceController,
  PowerServiceControllerMethods,
  RemovePowerdto,
  RemovePowerResponse,
} from '@app/common';

@Controller('power')
@PowerServiceControllerMethods()
export class PowerController implements PowerServiceController {
  constructor(private readonly powerService: PowerService) {}

  createPower(createPowerDto: CreatePowerdto) {
    return this.powerService.create(createPowerDto);
  }

  async removePower(
    removePowerdto: RemovePowerdto,
  ): Promise<RemovePowerResponse> {
    const result = await this.powerService.remove(removePowerdto.id);
    return { message: result.message };
  }
}
