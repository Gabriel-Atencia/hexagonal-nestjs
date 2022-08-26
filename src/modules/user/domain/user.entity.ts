import { IUser } from './user.interface';

export class User implements IUser {
  id: string;
  name: string;
  constructor({ id, name }: { id: string; name: string }) {
    this.id = id;
    this.name = name;
  }
}
