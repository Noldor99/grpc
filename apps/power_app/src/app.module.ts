import { Module } from '@nestjs/common';
import { PowerModule } from './power/power.module';

@Module({
  imports: [PowerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
