import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BondingTypeDTO } from './../dto/bonding-type.dto';
import { BondingType } from '../entity/bonding-type.entity';
import { BondingTypeRepository } from '../repository/bonding-type.repository';

@Injectable()
export class BondingTypeService {
  constructor(
    @InjectRepository(BondingTypeRepository)
    private blockRepository: BondingTypeRepository,
  ) {}

  async createBondingType(payload: BondingTypeDTO): Promise<BondingType> {
    const { name } = payload;
    const bondingType = new BondingType();
    bondingType.name = name;
    await bondingType.save();

    return bondingType;
  }
}
