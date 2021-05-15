import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerController } from './controller/logger.controller';
import { LoggerRepository } from './repository/logger.repository';
import { LoggerService } from './services/logger.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoggerRepository])],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
