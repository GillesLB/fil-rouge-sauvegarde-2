import { Photo } from './photo';
import { Role } from './role';

export interface User {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    photo: Photo;
}
