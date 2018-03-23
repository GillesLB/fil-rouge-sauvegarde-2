import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Vehicule {
    id?: number;
    createDate: string;
    updateDate: string;
    model: string;
    marque: string;
    color: string;
    licensePlate: string;
    description: string;
    listComment: Comment[];
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}
