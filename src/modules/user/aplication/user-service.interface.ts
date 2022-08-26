import { IUser } from '../domain/user.interface';
import { UserRepository } from '../domain/user.repository';

export abstract class IUserService {
  constructor(readonly repository: UserRepository) {}
  public abstract get(id: string): Promise<IUser | null>;
  public abstract getAll(): Promise<IUser[] | null>;
}
