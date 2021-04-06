import {User} from "../../users/shamas/user.shema.";
import {Citation} from "../../citations/shemas/citation.shema";


export class CreateFavoriteDto {

    readonly count: number;
    readonly user: User;
    readonly citation: Citation;
}
