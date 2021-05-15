import { ChemicalElement } from 'src/modules/chemical-element/entity/chemical-element.entity';

import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CrystalStructure extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => ChemicalElement,
    chemicalElement => chemicalElement.crystalStructure,
  )
  chemicalElement: ChemicalElement[];
}
