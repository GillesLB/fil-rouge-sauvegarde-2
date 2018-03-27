import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Weapon {
    id?: number;
    type?: string;
    modele?: string;
    createDate?: string;
    updateDate?: string;
}
