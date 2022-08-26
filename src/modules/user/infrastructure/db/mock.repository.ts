import { IUser } from 'src/modules/user/domain/user.interface';
import { UserRepository } from 'src/modules/user/domain/user.repository';

export class MockRespository implements UserRepository {
  users: IUser[] = [{ id: '1', name: 'pedro' }];
  public async get(id: string): Promise<IUser | null> {
    const user = new Promise<IUser>((resolve, reject) =>
      setTimeout(() => {
        resolve(this.users.find((element) => element.id === id) ?? null);
      }, 2000),
    );
    return user;
  }
  public async getAll(): Promise<IUser[]> {
    const users = new Promise<IUser[]>((resolve) =>
      setTimeout(() => {
        resolve(this.users ?? null);
      }, 2000),
    );
    return users;
  }
}
