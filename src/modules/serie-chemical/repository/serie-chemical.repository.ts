import { EntityRepository, Repository } from 'typeorm';

import { SerieChemical } from '../entity/serie-chemical.entity';

@EntityRepository(SerieChemical)
export class SerieChemicalRepository extends Repository<SerieChemical> {}
