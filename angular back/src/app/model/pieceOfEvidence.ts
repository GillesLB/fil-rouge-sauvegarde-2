import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface PieceOfEvidence {
    id?: number;
    date: string;
    name: string;
    description: string;
    listComment: Comment[];
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}
