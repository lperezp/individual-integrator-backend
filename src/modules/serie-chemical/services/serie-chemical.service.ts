import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SerieChemicalDTO } from '../dto/serie-chemical.dto';
import { SerieChemical } from '../entity/serie-chemical.entity';
import { SerieChemicalRepository } from '../repository/serie-chemical.repository';

@Injectable()
export class SerieChemicalService {
  constructor(
    @InjectRepository(SerieChemicalRepository)
    private blockRepository: SerieChemicalRepository,
  ) {}

  async createSerieChemical(payload: SerieChemicalDTO): Promise<SerieChemical> {
    const { name } = payload;
    const serieChemical = new SerieChemical();
    serieChemical.name = name;
    await serieChemical.save();

    return serieChemical;
  }
}
