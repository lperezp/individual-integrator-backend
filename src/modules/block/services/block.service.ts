import { Injectable } from '@nestjs/common';

import { BlockDTO } from './../dto/block.dto';
import { Block } from './../../../models/block.model';

@Injectable()
export class BlockService {
  private chemicalElement: Block[] = [];

  getAllBlock(): Block[] {
    return this.chemicalElement;
  }

  createBlock(payload: BlockDTO): Block {
    return;
  }
}
