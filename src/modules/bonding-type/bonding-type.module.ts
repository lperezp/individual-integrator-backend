import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BondingTypeController } from './controller/bonding-type.controller';
import { BondingTypeRepository } from './repository/bonding-type.repository';
import { BondingTypeService } from './services/bonding-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([BondingTypeRepository])],
  controllers: [BondingTypeController],
  providers: [BondingTypeService],
})
export class BondingTypeModule {}
