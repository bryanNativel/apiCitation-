import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Model} from "mongoose";

import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from "./shamas/user.shema.";

@Injectable()
export class UsersService  {
  constructor(
      @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto):Promise<User> {
    try{
      const user = await this.findOne(createUserDto.email)
      if(!user){
        const createdCat = new this.userModel(createUserDto);
        return createdCat.save();
      }else{
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: "user existing",
        }, HttpStatus.BAD_REQUEST);
      }

    }catch(e){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e,
      }, HttpStatus.BAD_REQUEST);
    }

  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string):Promise<User> {
    try {
      return await this.userModel.findOne({ email:email})
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'id invalide' + e,
      }, HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
