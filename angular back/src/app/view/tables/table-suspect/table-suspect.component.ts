import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-table-suspect',
  templateUrl: './table-suspect.component.html',
  styleUrls: ['./table-suspect.component.css']
})
export class TableSuspectComponent implements OnInit {
  suspectColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  suspectSource = this.affaireService.selectedAffaire.listSuspect;
  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}
