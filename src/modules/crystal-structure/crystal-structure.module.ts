import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CrystalStructureController } from './controller/crystal-structure.controller';
import { CrystalStructureRepository } from './repository/crystal-structure.repository';
import { CrystalStructureService } from './services/crystal-structure.service';

@Module({
  imports: [TypeOrmModule.forFeature([CrystalStructureRepository])],
  controllers: [CrystalStructureController],
  providers: [CrystalStructureService],
})
export class CrystalStructureModule {}
