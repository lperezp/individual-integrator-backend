import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeORMConfig } from './config/type-orm.config';
import { BlockModule } from './modules/block/block.module';
import { BondingTypeModule } from './modules/bonding-type/bonding-type.module';
import { ChemicalElementModule } from './modules/chemical-element/chemical-element.module';
import { CrystalStructureModule } from './modules/crystal-structure/crystal-structure.module';
import { SerieChemicalModule } from './modules/serie-chemical/serie-chemical.module';
import { StandardStateModule } from './modules/standard-state/standard-state.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ChemicalElementModule,
    BlockModule,
    BondingTypeModule,
    CrystalStructureModule,
    SerieChemicalModule,
    StandardStateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
