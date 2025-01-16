import { Test, TestingModule } from '@nestjs/testing';
import { LoginMailsService } from './login-mails.service';

describe('LoginMailsService', () => {
  let service: LoginMailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginMailsService],
    }).compile();

    service = module.get<LoginMailsService>(LoginMailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
