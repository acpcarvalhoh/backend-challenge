import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { encodePassword } from 'src/utils/bcrypt';
import { CreateUserTypes } from 'src/utils/types';
import { Repository } from 'typeorm';
import { omit } from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserTypes) {
    await this.ensureUserDoesNotExist(userDetails.email);
    const hashedPassword = this.encodePassword(userDetails.password);
    const newUser = this.createNewUser(userDetails, hashedPassword);
    const savedUser = await this.saveUser(newUser);
    return this.removePassword(savedUser);
  }

  private async ensureUserDoesNotExist(email: string) {
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new HttpException('E-mail already exists', HttpStatus.CONFLICT);
    }
  }

  private encodePassword(password: string): string {
    return encodePassword(password);
  }

  private createNewUser(userDetails: CreateUserTypes, password: string): User {
    return this.userRepository.create({ ...userDetails, password });
  }

  private saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  private removePassword(user: User) {
    return omit(user, ['password']);
  }

  async fetchUsers() {
    const users = await this.userRepository.find();
    return users.map((user) => this.removePassword(user));
  }
}
