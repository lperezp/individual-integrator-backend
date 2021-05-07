import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ChemicalElementDTO } from '../dto/chemical-element.dto';
import { ChemicalElement } from '../entity/chemical-element.entity';
import { ChemicalElementService } from '../services/chemical-element.service';

@Controller('chemical-element')
export class ChemicalElementController {
  constructor(private chemicalElementService: ChemicalElementService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createChemicalElement(
    @Body() payload: ChemicalElementDTO,
  ): Promise<ChemicalElement> {
    return this.chemicalElementService.createChemicalElement(payload);
  }
}
