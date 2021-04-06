import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import {User} from "../../users/entities/user.entity";

export type CitationDocument = Citation & Document;
@Schema()
export class Citation {
    @Prop()
    author:string;
    @Prop()
    oeuvre:string;
    @Prop()
    date:Date;
    @Prop()
    language:string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}
export const CitationSchema = SchemaFactory.createForClass(Citation);

