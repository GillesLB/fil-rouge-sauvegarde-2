import { Injectable } from '@angular/core';
import { Case } from '../model/case';

@Injectable()
export class AffaireService {

// sélecteur pour navigation inter component
  selectedAffaire: Case;

  constructor() { }

  selectAffaire(row) {
    this.selectedAffaire = row;
  }

}
