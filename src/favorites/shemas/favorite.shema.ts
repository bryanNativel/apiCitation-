import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";

import {Citation} from "../../citations/shemas/citation.shema";
import {User} from "../../users/shamas/user.shema.";


export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {

    @Prop()
    user: string;

    @Prop()
    citation: string;

}
export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
