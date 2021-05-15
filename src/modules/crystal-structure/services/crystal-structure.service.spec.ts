import { Test, TestingModule } from '@nestjs/testing';
import { CrystalStructureService } from './crystal-structure.service';

describe('CrystalStructureService', () => {
  let service: CrystalStructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrystalStructureService],
    }).compile();

    service = module.get<CrystalStructureService>(CrystalStructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
