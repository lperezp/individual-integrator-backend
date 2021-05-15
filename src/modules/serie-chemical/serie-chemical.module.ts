import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SerieChemicalController } from './controller/serie-chemical.controller';
import { SerieChemicalRepository } from './repository/serie-chemical.repository';
import { SerieChemicalService } from './services/serie-chemical.service';

@Module({
  imports: [TypeOrmModule.forFeature([SerieChemicalRepository])],
  controllers: [SerieChemicalController],
  providers: [SerieChemicalService],
})
export class SerieChemicalModule {}
