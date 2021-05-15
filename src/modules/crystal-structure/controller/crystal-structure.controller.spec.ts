import { Test, TestingModule } from '@nestjs/testing';
import { CrystalStructureController } from './crystal-structure.controller';

describe('CrystalStructureController', () => {
  let controller: CrystalStructureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrystalStructureController],
    }).compile();

    controller = module.get<CrystalStructureController>(
      CrystalStructureController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
