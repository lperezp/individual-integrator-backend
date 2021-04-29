import { Module } from '@nestjs/common';
import { BlockController } from './controller/block.controller';
import { BlockService } from './services/block.service';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
