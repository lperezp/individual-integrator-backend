import { Test, TestingModule } from '@nestjs/testing';
import { BondingTypeController } from './bonding-type.controller';

describe('BondingTypeController', () => {
  let controller: BondingTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BondingTypeController],
    }).compile();

    controller = module.get<BondingTypeController>(BondingTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
