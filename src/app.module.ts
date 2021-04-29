import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChemicalElementModule } from './modules/chemical-element/chemical-element.module';

@Module({
  imports: [ChemicalElementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
