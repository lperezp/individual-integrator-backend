import { CrystalStructure } from 'src/modules/crystal-structure/entity/crystal-structure.entity';
import { StandardState } from 'src/modules/standard-state/entity/standard-state.entity';

import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Block } from './../../block/entity/block.entity';
import { BondingType } from './../../bonding-type/entity/bonding-type.entity';
import { SerieChemical } from './../../serie-chemical/entity/serie-chemical.entity';

@Entity()
export class ChemicalElement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  atomicMass: number;

  @Column()
  atomicNumber: number;

  @Column()
  atomicRadius: number;

  @ManyToOne(
    type => Block,
    block => block.chemicalElement,
  )
  @JoinColumn({ name: 'idBlock' })
  block: Block;

  @Column()
  boilingPoint: number;

  @ManyToOne(
    type => BondingType,
    bondingType => bondingType.chemicalElement,
  )
  @JoinColumn({ name: 'idBondingType' })
  bondingType: BondingType;

  @Column()
  cpkHexColor: string;

  @ManyToOne(
    type => CrystalStructure,
    crystalStructure => crystalStructure.chemicalElement,
  )
  @JoinColumn({ name: 'idCrystalStructure' })
  crystalStructure: CrystalStructure;

  @Column()
  density: number;

  @Column()
  electronAffinity: number;

  @Column()
  electronegativity: number;

  @Column()
  electronicConfiguration: string;

  @Column()
  facts: string;

  @Column()
  group: number;

  @ManyToOne(
    type => SerieChemical,
    serieChemical => serieChemical.chemicalElement,
  )
  @JoinColumn({ name: 'idSerieChemical' })
  serieChemical: SerieChemical;

  @Column()
  ionRadius: string;

  @Column()
  ionizationEnergy: number;

  @Column()
  isotopes: string;

  @Column()
  magneticOrdering: string;

  @Column()
  meltingPoint: number;

  @Column()
  molarHeatCapacity: number;

  @Column()
  name: string;

  @Column()
  oxidationStates: string;

  @Column()
  period: number;

  @Column()
  speedOfSound: number;

  @ManyToOne(
    type => StandardState,
    standardState => standardState.chemicalElement,
  )
  @JoinColumn({ name: 'idStandardState' })
  standardState: StandardState;

  @Column()
  symbol: string;

  @Column()
  vanDelWaalsRadius: number;

  @Column()
  yearDiscovered: number;

  @Column()
  minerals: string;

  @Column()
  history: string;
}
