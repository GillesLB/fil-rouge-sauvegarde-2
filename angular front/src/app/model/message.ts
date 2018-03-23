import { User } from './user';

export interface Message {
    id?: number;
    date: string;
    description: string;
    user: User;
}
