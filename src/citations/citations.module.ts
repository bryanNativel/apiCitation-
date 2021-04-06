import { Module } from '@nestjs/common';
import { CitationsService } from './citations.service';
import { CitationsController } from './citations.controller';

import { MongooseModule } from '@nestjs/mongoose';
import {CitationSchema} from "./shemas/citation.shema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Citation', schema: CitationSchema }])],
  controllers: [CitationsController],
  providers: [CitationsService]
})
export class CitationsModule {}
