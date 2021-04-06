import {User} from "../../users/entities/user.entity";

export class CreateCitationDto {

    readonly author: string;
    readonly oeuvre: string;
    readonly date: Date;
    readonly language: string
    readonly user: User;
}
