import mongoose, {Document} from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {User} from "../../users/entities/user.entity";
import {Citation} from "../../citations/entities/citation.entity";

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
    @Prop()
    count :number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Citation' })
    citation: Citation;

}
export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
