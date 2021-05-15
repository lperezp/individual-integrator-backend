import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CrystalStructureDTO } from '../dto/crystal-structure.dto';
import { CrystalStructure } from '../entity/crystal-structure.entity';
import { CrystalStructureService } from '../services/crystal-structure.service';

@Controller('crystal-structure')
export class CrystalStructureController {
  constructor(private crystalStructureService: CrystalStructureService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: CrystalStructureDTO): Promise<CrystalStructure> {
    return this.crystalStructureService.createCrystalStructure(payload);
  }
}
