import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {FavoriteSchema} from "./entities/favorite.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Favorite', schema: FavoriteSchema }])],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})

export class FavoritesModule {}
