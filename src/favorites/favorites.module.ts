import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {FavoriteSchema} from "./shemas/favorite.shema";
import {CitationSchema} from "../citations/shemas/citation.shema";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Favorite', schema: FavoriteSchema },{ name: 'Citation', schema: CitationSchema }]),],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})

export class FavoritesModule {}
