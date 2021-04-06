import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateCitationDto} from './dto/create-citation.dto';
import {UpdateCitationDto} from './dto/update-citation.dto';
import {Model, ObjectId} from "mongoose";

import {InjectModel} from '@nestjs/mongoose';
import {Citation, CitationDocument} from "./shemas/citation.shema";
import * as mongoose from "mongoose";

@Injectable()
export class CitationsService {

    constructor(
        @InjectModel(Citation.name) private readonly citationModel: Model<CitationDocument>,
    ) {
    }

    async create(createCitationDto: CreateCitationDto): Promise<Citation> {
        try {
            const createdCita = new this.citationModel(createCitationDto)
            return await createdCita.save()
        }catch(e){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: e,
            }, HttpStatus.NOT_FOUND);
        }

    }

    async findAll(): Promise<Citation[]> {
        try {
            return await this.citationModel.find().exec();
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'empty' + e,
            }, HttpStatus.NOT_FOUND);
        }
    }

    async findOne(id: string): Promise<Citation> {
        try {
            return await this.citationModel.findById({_id: id}).exec()
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'id invalide' + e,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, updateCitationDto: UpdateCitationDto) {
        try {
            return await this.citationModel.findByIdAndUpdate(id, updateCitationDto, {new: true})
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'id invalide' + e,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async remove(id: string) {
        try {
            return await this.citationModel.findByIdAndRemove(id);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'id invalide' + e,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
