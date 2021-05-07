import { Test, TestingModule } from '@nestjs/testing';
import { BondingTypeService } from './bonding-type.service';

describe('BondingTypeService', () => {
  let service: BondingTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BondingTypeService],
    }).compile();

    service = module.get<BondingTypeService>(BondingTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
