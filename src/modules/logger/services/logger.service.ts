import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Observable } from 'rxjs';

import { Logger } from '../entity/logger.entity';
import { LoggerRepository } from './../repository/logger.repository';

@Injectable()
export class LoggerService {
  constructor(
    @InjectRepository(LoggerRepository)
    private loggerRepository: LoggerRepository,
  ) {}

  async createLogger(): Promise<Logger> {
    const logger = new Logger();
    logger.date = new Date();
    logger.description = 'A query was generated from the web.';
    await logger.save();

    return logger;
  }

  getAllLogger() {
    return this.loggerRepository.getAllLogger();
  }
}
