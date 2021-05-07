import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class ChemicalElement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  atomicMass: string;
  @Column()
  atomicNumber: number;

  @Column()
  atomicRadius: number;

  @Column()
  block: string;

  @Column()
  boilingPoint: number;

  @Column()
  bondingType: string;

  @Column()
  cpkHexColor: string;

  @Column()
  crystalStructure: string;

  @Column()
  density: string;

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

  @Column()
  groupBlock: string;

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

  @Column()
  standardState: string;

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

// import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

// export class ChemicalElement extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   atomicMass: string;
//   @Column()
//   atomicNumber: number;

//   @Column()
//   atomicRadius: number;

//   @Column()
//   idBlock: number;

//   @Column()
//   boilingPoint: number;

//   @Column()
//   idBondingType: number;

//   @Column()
//   cpkHexColor: string;

//   @Column()
//   idCrystalStructure: number;

//   @Column()
//   density: string;

//   @Column()
//   electronAffinity: number;

//   @Column()
//   electronegativity: number;

//   @Column()
//   electronicConfiguration: string;

//   @Column()
//   facts: string;

//   @Column()
//   group: number;

//   @Column()
//   idGroupBlock: number;

//   @Column()
//   ionRadius: string;

//   @Column()
//   ionizationEnergy: number;

//   @Column()
//   isotopes: string;

//   @Column()
//   magneticOrdering: string;

//   @Column()
//   meltingPoint: number;

//   @Column()
//   molarHeatCapacity: number;

//   @Column()
//   name: string;

//   @Column()
//   oxidationStates: string;

//   @Column()
//   period: number;

//   @Column()
//   speedOfSound: number;

//   @Column()
//   idStandardState: number;

//   @Column()
//   symbol: string;

//   @Column()
//   vanDelWaalsRadius: number;

//   @Column()
//   yearDiscovered: number;

//   @Column()
//   minerals: string;

//   @Column()
//   history: string;
// }
