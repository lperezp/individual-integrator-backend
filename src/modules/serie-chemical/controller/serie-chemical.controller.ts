import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { SerieChemicalDTO } from '../dto/serie-chemical.dto';
import { SerieChemical } from '../entity/serie-chemical.entity';
import { SerieChemicalService } from '../services/serie-chemical.service';

@Controller('serie-chemical')
export class SerieChemicalController {
  constructor(private serieChemicalService: SerieChemicalService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: SerieChemicalDTO): Promise<SerieChemical> {
    return this.serieChemicalService.createSerieChemical(payload);
  }
}
