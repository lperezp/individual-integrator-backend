import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Block } from '../entity/block.entity';

import { BlockDTO } from './../dto/block.dto';
import { BlockRepository } from './../repository/block.repository';

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(BlockRepository)
    private blockRepository: BlockRepository,
  ) {}

  async createBlock(payload: BlockDTO): Promise<Block> {
    const { value, description } = payload;
    const block = new Block();
    block.value = value;
    block.description = description;
    await block.save();

    return block;
  }
}
