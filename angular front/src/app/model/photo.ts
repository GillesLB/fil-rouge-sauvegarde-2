import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Photo {
    id?: number;
    date: string;
    name: string;
    description: string;
    listComment: Comment[];
    url: string;
    listCase: Case[];
    listTag: Tag[];
}
