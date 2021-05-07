import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CrystalStructureDTO } from '../dto/crystal-structure.dto';
import { CrystalStructure } from '../entity/crystal-structure.entity';
import { CrystalStructureRepository } from '../repository/crystal-structure.repository';

@Injectable()
export class CrystalStructureService {
  constructor(
    @InjectRepository(CrystalStructureRepository)
    private blockRepository: CrystalStructureRepository,
  ) {}

  async createCrystalStructure(
    payload: CrystalStructureDTO,
  ): Promise<CrystalStructure> {
    const { name } = payload;
    const crystalStructure = new CrystalStructure();
    crystalStructure.name = name;
    await crystalStructure.save();

    return crystalStructure;
  }
}
