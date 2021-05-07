import { Injectable } from '@nestjs/common';

import * as uuid from 'uuid';

import { ChemicalElementDTO } from '../dto/chemical-element.dto';
import { ChemicalElement } from '../entity/chemical-element.entity';

@Injectable()
export class ChemicalElementService {
  async createChemicalElement(
    payload: ChemicalElementDTO,
  ): Promise<ChemicalElement> {
    const {
      atomicMass,
      atomicNumber,
      atomicRadius,
      block,
      boilingPoint,
      bondingType,
      cpkHexColor,
      crystalStructure,
      density,
      electronAffinity,
      electronegativity,
      electronicConfiguration,
      facts,
      group,
      groupBlock,
      ionRadius,
      ionizationEnergy,
      isotopes,
      magneticOrdering,
      meltingPoint,
      molarHeatCapacity,
      name,
      oxidationStates,
      period,
      speedOfSound,
      standardState,
      symbol,
      vanDelWaalsRadius,
      yearDiscovered,
      minerals,
      history,
    } = payload;
    const chemicalElement = new ChemicalElement();

    chemicalElement.atomicMass = atomicMass;
    chemicalElement.atomicNumber = atomicNumber;
    chemicalElement.atomicRadius = atomicRadius;
    chemicalElement.block = block;
    chemicalElement.boilingPoint = boilingPoint;
    chemicalElement.bondingType = bondingType;
    chemicalElement.cpkHexColor = cpkHexColor;
    chemicalElement.crystalStructure = crystalStructure;
    chemicalElement.density = density;
    chemicalElement.electronAffinity = electronAffinity;
    chemicalElement.electronegativity = electronegativity;
    chemicalElement.electronicConfiguration = electronicConfiguration;
    chemicalElement.facts = facts;
    chemicalElement.group = group;
    chemicalElement.groupBlock = groupBlock;
    chemicalElement.ionRadius = ionRadius;
    chemicalElement.ionizationEnergy = ionizationEnergy;
    chemicalElement.isotopes = isotopes;
    chemicalElement.magneticOrdering = magneticOrdering;
    chemicalElement.meltingPoint = meltingPoint;
    chemicalElement.molarHeatCapacity = molarHeatCapacity;
    chemicalElement.name = name;
    chemicalElement.oxidationStates = oxidationStates;
    chemicalElement.period = period;
    chemicalElement.speedOfSound = speedOfSound;
    chemicalElement.standardState = standardState;
    chemicalElement.symbol = symbol;
    chemicalElement.vanDelWaalsRadius = vanDelWaalsRadius;
    chemicalElement.yearDiscovered = yearDiscovered;
    chemicalElement.minerals = minerals;
    chemicalElement.history = history;

    await chemicalElement.save();
    return chemicalElement;
  }
}
