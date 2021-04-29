import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChemicalElementDTO } from '../dto/chemical-element.dto';

import { ChemicalElementService } from '../services/chemical-element.service';
import { ChemicalElement } from './../../../models/chemical-element.model';

@Controller('chemical-element')
export class ChemicalElementController {
  constructor(private chemicalElementService: ChemicalElementService) {}

  @Get()
  getAllChemicalElement(): ChemicalElement[] {
    return this.chemicalElementService.getAllChemicalElement();
  }

  @Post()
  createChemicalElement(@Body() body: ChemicalElementDTO): void {
    console.log('bbb', body);
  }
}
