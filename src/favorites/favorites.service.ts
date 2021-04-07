import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateFavoriteDto} from './dto/create-favorite.dto';
import {UpdateFavoriteDto} from './dto/update-favorite.dto';
import {Model, QueryWithHelpers, Schema} from "mongoose";
import * as mongoose from "mongoose";
import {InjectModel} from '@nestjs/mongoose';
import {Favorite, FavoriteDocument} from "./shemas/favorite.shema";
import {CitationsService} from "../citations/citations.service";
import {Citation, CitationDocument} from "../citations/shemas/citation.shema";

@Injectable()
export class FavoritesService {
    constructor(
        @InjectModel(Favorite.name) private readonly favoriteModel: Model<FavoriteDocument>, @InjectModel(Citation.name) private readonly citationModel: Model<CitationDocument>
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

    async findAll(userId: string) {
        try {
            const favorites = await this.favoriteModel.find().exec()
            let favoriteFilter = []
            favorites.forEach(favorite=>{
                if(favorite.user == userId){
                    favoriteFilter.push(favorite.citation)
                }
            })
            const quote = await this.citationModel.find({
                '_id': {
                    $in:
                    favoriteFilter
                }
            })
            return quote

        } catch (e) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: e,
            }, HttpStatus.NOT_FOUND);
        }
    }

     async findOne(quoteId: string) {
        try {
             const favorite =  await this.favoriteModel.findById({_id: quoteId});
            const quote = await this.citationModel.find({
                '_id': {
                    $in:
                    favorite.citation
                }
            })
            return quote


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
