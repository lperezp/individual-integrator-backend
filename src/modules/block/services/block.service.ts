import { Injectable } from '@nestjs/common';
import { Block } from './../../../models/block.model';

@Injectable()
export class BlockService {
  private chemicalElement: Block[] = [];

  getAllBlock(): Block[] {
    return this.chemicalElement;
  }
}
