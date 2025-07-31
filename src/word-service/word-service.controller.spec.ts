import { Test, TestingModule } from '@nestjs/testing';
import { WordServiceController } from './word-service.controller';

describe('WordServiceController', () => {
  let controller: WordServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordServiceController],
    }).compile();

    controller = module.get<WordServiceController>(WordServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
