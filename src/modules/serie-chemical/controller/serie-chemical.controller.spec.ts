import { Test, TestingModule } from '@nestjs/testing';
import { SerieChemicalController } from './serie-chemical.controller';

describe('SerieChemicalController', () => {
  let controller: SerieChemicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerieChemicalController],
    }).compile();

    controller = module.get<SerieChemicalController>(SerieChemicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
