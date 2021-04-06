import { Module } from '@nestjs/common';
import { CitationsService } from './citations.service';
import { CitationsController } from './citations.controller';
import {Citation, CitationSchema} from "./entities/citation.entity";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Citation', schema: CitationSchema }])],
  controllers: [CitationsController],
  providers: [CitationsService]
})
export class CitationsModule {}
