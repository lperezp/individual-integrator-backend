import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ChemicalElement } from './../../chemical-element/entity/chemical-element.entity';

@Entity()
export class Block extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  description: string;

  @OneToMany(
    type => ChemicalElement,
    chemicalElement => chemicalElement.block,
  )
  chemicalElement: ChemicalElement[];
}
