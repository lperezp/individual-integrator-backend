import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

import { ChemicalElement } from 'src/models/chemical-element.model';

import * as uuid from 'uuid';

import { ChemicalElementDTO } from '../dto/chemical-element.dto';

@Injectable()
export class ChemicalElementService {
  private chemicalElement: ChemicalElement[] = [];

  getAllChemicalElement(): ChemicalElement[] {
    return this.chemicalElement;
  }

  getChemicalElementByName(name: string): ChemicalElement {
    const element = this.chemicalElement.find(x => x.name === name);
    if (!element) {
      throw new NotFoundException();
    }
    return element;
  }

  createChemicalElement(payload: ChemicalElementDTO): ChemicalElement {
    const chemicalElement: ChemicalElement = {
      id: uuid(),
      ...payload,
    };
    return chemicalElement;
  }
}
