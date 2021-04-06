import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import {Model, QueryWithHelpers} from "mongoose";

import { InjectModel } from '@nestjs/mongoose';
import {Favorite, FavoriteDocument} from "./shemas/favorite.shema";

@Injectable()
export class FavoritesService {
  constructor(
      @InjectModel(Favorite.name) private readonly favoriteModel: Model<FavoriteDocument>,
  ) {}

  create(createFavoriteDto: CreateFavoriteDto):Promise<Favorite> {
    const createFavorite = new this.favoriteModel(createFavoriteDto)
    return createFavorite.save() ;
  }

  findAll():Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }

  findOne(id: number){
    return this.favoriteModel.findById(id);
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto){
    return this.favoriteModel.findByIdAndUpdate(id,updateFavoriteDto,{ new:true });
  }

  remove(id: number){
    return this.favoriteModel.findByIdAndRemove(id)
  }
}
