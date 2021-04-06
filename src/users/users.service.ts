import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Model} from "mongoose";
import {User, UserDocument} from "./entities/user.entity";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService  {
  constructor(
      @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  create(createUserDto: CreateUserDto):Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
