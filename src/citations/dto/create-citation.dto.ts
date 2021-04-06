import {User} from "../../users/shamas/user.shema.";


export class CreateCitationDto {

    readonly author: string;
    readonly oeuvre: string;
    readonly date: Date;
    readonly language: string
    readonly user: User;
}
