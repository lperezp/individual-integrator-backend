import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Block } from 'src/models/block.model';

import { BlockDTO } from '../dto/block.dto';
import { BlockService } from '../services/block.service';

@Controller('block')
export class BlockController {
  constructor(private blockService: BlockService) {}

  @Get()
  getAllBlock(): Block[] {
    return this.blockService.getAllBlock();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: BlockDTO): Block {
    return this.blockService.createBlock(payload);
  }
}
