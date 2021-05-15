import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { StandardStateDTO } from '../dto/standard-state.dto';
import { StandardState } from '../entity/standard-state.entity';
import { StandardStateRepository } from '../repository/standard-state.repository';

@Injectable()
export class StandardStateService {
  constructor(
    @InjectRepository(StandardStateRepository)
    private blockRepository: StandardStateRepository,
  ) {}

  async createStandardState(payload: StandardStateDTO): Promise<StandardState> {
    const { name } = payload;
    const serieChemical = new StandardState();
    serieChemical.name = name;
    await serieChemical.save();

    return serieChemical;
  }
}
