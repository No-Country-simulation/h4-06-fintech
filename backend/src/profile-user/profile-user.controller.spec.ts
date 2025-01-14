import { Test, TestingModule } from '@nestjs/testing';
import { ProfileUserController } from './profile-user.controller';
import { ProfileUserService } from './profile-user.service';

describe('ProfileUserController', () => {
  let controller: ProfileUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileUserController],
      providers: [ProfileUserService]
    }).compile();

    controller = module.get<ProfileUserController>(ProfileUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
