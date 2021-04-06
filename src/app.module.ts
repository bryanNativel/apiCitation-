import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitationsModule } from './citations/citations.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    CitationsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
