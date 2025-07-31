import { Test, TestingModule } from '@nestjs/testing';
import { WordServiceService } from './word-service.service';

describe('WordServiceService', () => {
  let service: WordServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordServiceService],
    }).compile();

    service = module.get<WordServiceService>(WordServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
