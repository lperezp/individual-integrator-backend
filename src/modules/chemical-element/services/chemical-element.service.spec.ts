import { Test, TestingModule } from '@nestjs/testing';
import { ChemicalElementService } from './chemical-element.service';

describe('ChemicalElementService', () => {
  let service: ChemicalElementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChemicalElementService],
    }).compile();

    service = module.get<ChemicalElementService>(ChemicalElementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
