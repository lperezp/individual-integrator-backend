import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChemicalElementController } from './controllers/chemical-element.controller';
import { ChemicalElementRepository } from './repository/chemical-element.repository';
import { ChemicalElementService } from './services/chemical-element.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChemicalElementRepository])],
  controllers: [ChemicalElementController],
  providers: [ChemicalElementService],
})
export class ChemicalElementModule {}
