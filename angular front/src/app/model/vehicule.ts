import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Vehicule {
    id?: number;
    marque: string;
    model: string;
    color: string;
    licensePlate: string;
    createDate: Date;
    updateDate: Date;
    listCase: Case [];
}

