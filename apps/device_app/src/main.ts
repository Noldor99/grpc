import { DEVICE_PACKAGE_NAME } from '@app/common/types/device';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
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
