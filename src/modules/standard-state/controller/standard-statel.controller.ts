import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { StandardStateDTO } from '../dto/standard-state.dto';
import { StandardState } from '../entity/standard-state.entity';
import { StandardStateService } from '../services/standard-state.service';

@Controller('standard-state')
export class StandardStateController {
  constructor(private serieChemicalService: StandardStateService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: StandardStateDTO): Promise<StandardState> {
    return this.serieChemicalService.createStandardState(payload);
  }
}
