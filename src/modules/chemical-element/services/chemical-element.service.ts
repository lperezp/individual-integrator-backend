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

  createChemicalElement(payload: ChemicalElementDTO): ChemicalElement {
    const chemicalElement: ChemicalElement = {
      id: uuid(),
      ...payload,
    };
    return chemicalElement;
  }
}
