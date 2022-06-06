import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { User, UserData } from './user.interface';

@Injectable()
export class UserService {

  private readonly users: User[] = [
    {
      uuid: '4ab0e3ba-fa5d-4216-bb38-fdf6a4e62185',
      username: 'Marcelo',
      email: 'marcelo@pedrazzani.com.br',
      password: '12345678',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === username);
  }

  async findOneByUuid(uuid: string): Promise<User | undefined> {
    return this.users.find((user) => user.uuid === uuid);
  }
}
