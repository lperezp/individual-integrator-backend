import { Module } from '@nestjs/common';

import { ChemicalElementController } from './controllers/chemical-element.controller';
import { ChemicalElementService } from './services/chemical-element.service';

@Module({
  controllers: [ChemicalElementController],
  providers: [ChemicalElementService],
})
export class ChemicalElementModule {}
