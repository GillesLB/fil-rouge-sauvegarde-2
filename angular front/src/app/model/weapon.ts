import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Weapon {
    id?: number;
    createDate?: string;
    type?: string;
    modele?: string;
    description?: string;
    updateDate?: string;
    listComment?: Comment[];
    listPhoto?: Photo[];
    listCase?: Case [];
    listTag?: Tag[];
}
