import { POWER_PACKAGE_NAME } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { PowerModule } from './power/power.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PowerModule,
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
          'power.proto',
        ),
        package: POWER_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
}
bootstrap();
