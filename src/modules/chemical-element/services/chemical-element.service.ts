import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Block } from 'src/modules/block/entity/block.entity';
import { SerieChemical } from 'src/modules/serie-chemical/entity/serie-chemical.entity';
import { StandardState } from 'src/modules/standard-state/entity/standard-state.entity';

import { ChemicalElementDTO } from '../dto/chemical-element.dto';
import { ChemicalElement } from '../entity/chemical-element.entity';
import { ChemicalElementRepository } from '../repository/chemical-element.repository';
import { BondingType } from './../../bonding-type/entity/bonding-type.entity';
import { CrystalStructure } from './../../crystal-structure/entity/crystal-structure.entity';

@Injectable()
export class ChemicalElementService {
  constructor(
    @InjectRepository(ChemicalElementRepository)
    private chemicalElementRepository: ChemicalElementRepository,
  ) {}
  async createChemicalElement(
    payload: ChemicalElementDTO,
  ): Promise<ChemicalElement> {
    const {
      atomicMass,
      atomicNumber,
      atomicRadius,
      idBlock,
      boilingPoint,
      idBondingType,
      cpkHexColor,
      idCrystalStructure,
      density,
      electronAffinity,
      electronegativity,
      electronicConfiguration,
      facts,
      group,
      idSerieChemical,
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
      idStandardState,
      symbol,
      vanDelWaalsRadius,
      yearDiscovered,
      minerals,
      history,
    } = payload;
    const chemicalElement = new ChemicalElement();
    const block = new Block();
    const bondingType = new BondingType();
    const crystalStructure = new CrystalStructure();
    const serieChemical = new SerieChemical();
    const standardState = new StandardState();
    block.id = idBlock;
    bondingType.id = idBondingType;
    crystalStructure.id = idCrystalStructure;
    serieChemical.id = idSerieChemical;
    standardState.id = idStandardState;

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
    chemicalElement.serieChemical = serieChemical;
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

  getAll() {
    return this.chemicalElementRepository.getAll();
  }
}
