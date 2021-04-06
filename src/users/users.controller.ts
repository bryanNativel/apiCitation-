import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {LocalStrategy} from "../auth/local.strategy";

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService , private localStrategy :LocalStrategy) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() user : CreateUserDto){
    return this.localStrategy.validate(user.email,user.password)
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

