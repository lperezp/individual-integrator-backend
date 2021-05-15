import { EntityRepository, Repository } from 'typeorm';

import { BondingType } from './../entity/bonding-type.entity';

@EntityRepository(BondingType)
export class BondingTypeRepository extends Repository<BondingType> {}
