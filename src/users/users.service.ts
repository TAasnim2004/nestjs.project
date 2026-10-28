import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto) {
    const user = { ...createUserDto, id: this.users.length + 1 };
    this.users.push(user);
    return { status: 201, message: 'User created successfully', user };
  }

  findAll() {
    return { status: 200, message: 'Users retrieved successfully', users: this.users };
  }

  findOne(id: number) {
    return { status: 200, message: 'User retrieved successfully', user: this.users.find(user => user.id === id) };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return { status: 404, message: 'User not found' };
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return { status: 200, message: 'User updated successfully', user: this.users[userIndex] };
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return { status: 404, message: 'User not found' };
    }
    return { status: 200, message: 'User deleted successfully', user: this.users.splice(userIndex, 1)[0] };
  }
}
