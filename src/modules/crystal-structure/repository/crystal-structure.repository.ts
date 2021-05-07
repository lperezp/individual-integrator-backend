import { EntityRepository, Repository } from 'typeorm';

import { CrystalStructure } from '../entity/crystal-structure.entity';

@EntityRepository(CrystalStructure)
export class CrystalStructureRepository extends Repository<CrystalStructure> {}
