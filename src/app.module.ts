import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChemicalElementModule } from './modules/chemical-element/chemical-element.module';
import { BlockModule } from './modules/block/block.module';
import { typeORMConfig } from './config/type-orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ChemicalElementModule,
    BlockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
