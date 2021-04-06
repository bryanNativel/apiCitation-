import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from "./shamas/user.shema.";
import {LocalStrategy} from "../auth/local.strategy";
import {AuthService} from "../auth/auth.service";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService,LocalStrategy,AuthService]
})
export class UsersModule {}
