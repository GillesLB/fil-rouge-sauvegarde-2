import { User } from './user';

export interface Comment {
    id?: number;
    date: string;
    text: string;
    user: User;
}
