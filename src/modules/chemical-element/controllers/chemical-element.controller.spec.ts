import { Test, TestingModule } from '@nestjs/testing';
import { ChemicalElementController } from './chemical-element.controller';

describe('ChemicalElementController', () => {
  let controller: ChemicalElementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChemicalElementController],
    }).compile();

    controller = module.get<ChemicalElementController>(ChemicalElementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
