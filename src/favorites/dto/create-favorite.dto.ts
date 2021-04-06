import {User} from "../../users/entities/user.entity";
import {Citation} from "../../citations/entities/citation.entity";

export class CreateFavoriteDto {

    readonly count: number;
    readonly user: User;
    readonly citation: Citation;
}
