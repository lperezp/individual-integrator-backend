import { Controller, Get } from '@nestjs/common';
import { Block } from 'src/models/block.model';
import { BlockService } from '../services/block.service';

@Controller('block')
export class BlockController {
  constructor(private blockService: BlockService) {}

  @Get()
  getAllBlock(): Block[] {
    return this.blockService.getAllBlock();
  }
}
