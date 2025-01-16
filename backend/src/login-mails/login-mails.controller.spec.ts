import { Test, TestingModule } from '@nestjs/testing';
import { LoginMailsController } from './login-mails.controller';
import { LoginMailsService } from './login-mails.service';

describe('LoginMailsController', () => {
  let controller: LoginMailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginMailsController],
      providers: [LoginMailsService],
    }).compile();

    controller = module.get<LoginMailsController>(LoginMailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
