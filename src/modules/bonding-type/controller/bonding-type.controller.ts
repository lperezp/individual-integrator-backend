import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BondingTypeDTO } from '../dto/bonding-type.dto';
import { BondingType } from '../entity/bonding-type.entity';
import { BondingTypeService } from '../services/bonding-type.service';

@Controller('bonding-type')
export class BondingTypeController {
  constructor(private bondingTypeService: BondingTypeService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlock(@Body() payload: BondingTypeDTO): Promise<BondingType> {
    return this.bondingTypeService.createBondingType(payload);
  }
}
