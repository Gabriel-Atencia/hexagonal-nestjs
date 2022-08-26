import { Injectable } from '@nestjs/common';
import { IUser } from '../domain/user.interface';
import { UserRepository } from '../domain/user.repository';
import { IUserService } from './user-service.interface';

@Injectable()
export class UserServiceImp implements IUserService {
  constructor(readonly repository: UserRepository) {}

  public get(id: string): Promise<IUser> {
    return this.repository.get(id);
  }
  public getAll(): Promise<IUser[]> {
    return this.repository.getAll();
  }
}
