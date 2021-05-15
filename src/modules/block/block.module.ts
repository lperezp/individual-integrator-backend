import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlockController } from './controller/block.controller';
import { BlockRepository } from './repository/block.repository';
import { BlockService } from './services/block.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlockRepository])],
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
