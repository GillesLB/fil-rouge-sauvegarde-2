import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-table-victim',
  templateUrl: './table-victim.component.html',
  styleUrls: ['./table-victim.component.css']
})
export class TableVictimComponent implements OnInit {
  victimColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  victimSource = this.affaireService.selectedAffaire.listVictim;
  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}
