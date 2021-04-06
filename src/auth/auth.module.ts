import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [UsersModule,PassportModule],
  providers: []
})
export class AuthModule {}
