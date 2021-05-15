import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Logger } from '../entity/logger.entity';
import { LoggerService } from '../services/logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private loggerService: LoggerService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createLogger(): Promise<Logger> {
    return this.loggerService.createLogger();
  }

  @Get()
  getAllLogger(): Promise<Logger[]> {
    return this.loggerService.getAllLogger();
  }
}
