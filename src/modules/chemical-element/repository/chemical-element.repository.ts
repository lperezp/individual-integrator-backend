import { EntityRepository, Repository } from 'typeorm';

import { ChemicalElement } from 'src/modules/chemical-element/entity/chemical-element.entity';

@EntityRepository(ChemicalElement)
export class ChemicalElementRepository extends Repository<ChemicalElement> {
  async getAll(): Promise<ChemicalElement[]> {
    return await this.createQueryBuilder('chemical_element')
      .innerJoinAndSelect('chemical_element.block', 'block')
      .innerJoinAndSelect('chemical_element.bondingType', 'bondingType')
      .innerJoinAndSelect(
        'chemical_element.crystalStructure',
        'crystalStructure',
      )
      .innerJoinAndSelect('chemical_element.serieChemical', 'serieChemical')
      .innerJoinAndSelect('chemical_element.standardState', 'standardState')
      .orderBy('chemical_element.order', 'ASC')
      .getMany();
  }
}
