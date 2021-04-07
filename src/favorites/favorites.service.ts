import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateFavoriteDto} from './dto/create-favorite.dto';
import {UpdateFavoriteDto} from './dto/update-favorite.dto';
import {Model, QueryWithHelpers} from "mongoose";

import {InjectModel} from '@nestjs/mongoose';
import {Favorite, FavoriteDocument} from "./shemas/favorite.shema";

@Injectable()
export class FavoritesService {
    constructor(
        @InjectModel(Favorite.name) private readonly favoriteModel: Model<FavoriteDocument>,
    ) {
    }

    async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
        try {
            const createFavorite = new this.favoriteModel(createFavoriteDto)
            return await createFavorite.save();
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: e,
            }, HttpStatus.NOT_FOUND);
        }
    }

    async findAll(): Promise<Favorite[]> {
        try {
            return await this.favoriteModel.find().exec();
        } catch {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "empty",
            }, HttpStatus.NOT_FOUND);
        }
    }

    async findOne(id: string) {
        try {
            return await this.favoriteModel.findById(id);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e,
            }, HttpStatus.BAD_REQUEST);
        }

    }

    async update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
        try {
            return await this.favoriteModel.findByIdAndUpdate(id, updateFavoriteDto, {new: true});
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async remove(id: string) {
        try {
            return this.favoriteModel.findByIdAndRemove(id)
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
