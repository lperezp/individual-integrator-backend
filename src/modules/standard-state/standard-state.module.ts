import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardStateController } from './controller/standard-statel.controller';

import { StandardStateRepository } from './repository/standard-state.repository';
import { StandardStateService } from './services/standard-state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StandardStateRepository])],
  controllers: [StandardStateController],
  providers: [StandardStateService],
})
export class StandardStateModule {}
