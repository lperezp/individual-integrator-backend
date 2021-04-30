import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Get('/:name')
  getChemicalElementByName(@Param('name') name: string): ChemicalElement {
    return this.chemicalElementService.getChemicalElementByName(name);
  }

  @Post()
  createChemicalElement(@Body() body: ChemicalElementDTO): void {
    console.log('bbb', body);
  }
}
