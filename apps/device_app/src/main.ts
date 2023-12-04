import { POWER_PACKAGE_NAME } from '@app/common';
import { DEVICE_PACKAGE_NAME } from '@app/common/types/device';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { DeviceModule } from './device/device.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DeviceModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'proto',
          'device.proto',
        ),
        package: DEVICE_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
}
bootstrap();
