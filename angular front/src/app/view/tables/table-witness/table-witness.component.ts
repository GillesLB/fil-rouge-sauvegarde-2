import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-table-witness',
  templateUrl: './table-witness.component.html',
  styleUrls: ['./table-witness.component.css']
})
export class TableWitnessComponent implements OnInit {
  witnessColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  witnessSource = this.affaireService.selectedAffaire.listWitness;
  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}
