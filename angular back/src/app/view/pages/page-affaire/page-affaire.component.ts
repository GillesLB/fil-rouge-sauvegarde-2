import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-page-affaire',
  templateUrl: './page-affaire.component.html',
  styleUrls: ['./page-affaire.component.css']
})
export class PageAffaireComponent implements OnInit {
  affaire = this.affaireService.selectedAffaire;
  editModeDescription: boolean = false;

  constructor(public affaireService: AffaireService) { }

  ngOnInit() {}

// switch edition/affichage de la description
  editDescription() {
    this.editModeDescription = !this.editModeDescription;
  }

}
