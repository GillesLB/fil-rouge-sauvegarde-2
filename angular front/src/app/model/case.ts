import { User } from './user';
import { Photo } from './photo';
import { PieceOfEvidence } from './pieceOfEvidence';
import { People } from './people';
import { Weapon } from './weapon';
import { Vehicule } from './vehicule';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Case {
    id?: number;
    date?: string;
    name?: string;
    description?: string;
    listComment?: Comment[];
    listUser?: User[];
    listPhoto?: Photo[];
    listPoE?: PieceOfEvidence[];
    listVictim?: People[];
    listSuspect?: People[];
    listWitness?: People[];
    listWeapon?: Weapon[];
    vehicule?: Vehicule[];
    listTag?: Tag[];
}
