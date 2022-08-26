import { IUser } from './user.interface';

export abstract class UserRepository {
  public abstract get(id: string): Promise<IUser | null>;
  public abstract getAll(): Promise<IUser[] | null>;
}
