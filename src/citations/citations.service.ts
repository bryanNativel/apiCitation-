import { Injectable } from '@nestjs/common';
import { CreateCitationDto } from './dto/create-citation.dto';
import { UpdateCitationDto } from './dto/update-citation.dto';
import {Model, QueryWithHelpers} from "mongoose";
import {Citation, CitationDocument} from "./entities/citation.entity";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitationsService {

  constructor(
      @InjectModel(Citation.name) private readonly citationModel: Model<CitationDocument>,
  ) {}

  create(createCitationDto: CreateCitationDto):Promise<Citation> {
    const createdCita = new this.citationModel(createCitationDto)
    return createdCita.save()
  }

  findAll():Promise<Citation[]> {
    return this.citationModel.find().exec();
  }

  findOne(id: number):Promise<Citation> {
    return this.citationModel.findById(id).exec();
  }

  update(id: number, updateCitationDto: UpdateCitationDto):QueryWithHelpers<CitationDocument | null, CitationDocument, {}> {
    return this.citationModel.findByIdAndUpdate(id,updateCitationDto,{new:true})
  }

  remove(id: number):QueryWithHelpers<CitationDocument | null, CitationDocument, {}> {
    return this.citationModel.findByIdAndRemove(id);
  }
}
