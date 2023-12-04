import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { PawerModule } from './pawer/pawer.module';

@Module({
  imports: [PawerModule, DeviceModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
