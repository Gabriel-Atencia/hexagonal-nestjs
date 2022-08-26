import { Module } from '@nestjs/common';
import { IUserService } from '../aplication/user-service.interface';
import { UserServiceImp } from '../aplication/user.services';
import { UserRepository } from '../domain/user.repository';
import { MockRespository } from './db/mock.repository';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    { provide: IUserService, useClass: UserServiceImp },
    { provide: UserRepository, useClass: MockRespository },
  ],
})
export class UserModule {}
