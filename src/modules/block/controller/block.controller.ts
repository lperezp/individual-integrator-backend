import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BlockDTO } from '../dto/block.dto';
import { Block } from '../entity/block.entity';
import { BlockService } from '../services/block.service';

@Controller('block')
export class BlockController {
  constructor(private blockService: BlockService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: BlockDTO): Promise<Block> {
    return this.blockService.createBlock(payload);
  }
}
