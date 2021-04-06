import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitationsService } from './citations.service';
import { CreateCitationDto } from './dto/create-citation.dto';
import { UpdateCitationDto } from './dto/update-citation.dto';
import {ObjectId} from "mongoose";
import * as mongoose from "mongoose";

@Controller('api/citations')
export class CitationsController {
  constructor(private readonly citationsService: CitationsService) {}

  @Post()
  create(@Body() createCitationDto: CreateCitationDto) {
    return this.citationsService.create(createCitationDto);
  }

  @Get()
  findAll() {
    return this.citationsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {

   return this.citationsService.findOne(id);

  }
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateCitationDto: UpdateCitationDto) {
    return this.citationsService.update(id, updateCitationDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.citationsService.remove(id);
  }
}
