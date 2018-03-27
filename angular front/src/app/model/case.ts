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
    comment?: Comment[];
    user?: User[];
    photo?: Photo[];
    poE?: PieceOfEvidence[];
    victim?: People[];
    suspect?: People[];
    witness?: People[];
    weapon?: Weapon[];
    vehicule?: Vehicule[];
    tag?: Tag[];
}
