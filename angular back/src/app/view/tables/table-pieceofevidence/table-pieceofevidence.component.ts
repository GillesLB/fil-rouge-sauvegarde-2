import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../../model/pieceOfEvidence';
import { AffaireService } from '../../../controller/affaire.service';


@Component({
  selector: 'app-table-pieceofevidence',
  templateUrl: './table-pieceofevidence.component.html',
  styleUrls: ['./table-pieceofevidence.component.css']
})
export class TablePieceofevidenceComponent implements OnInit {
  pieceOfEvidenceColumns = ['date', 'name', 'description', 'button'];
  pieceOfEvidenceSource = this.affaireService.selectedAffaire.listPoE;


  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}

// USER TESTING
const generatedListPieceOfEvidence: PieceOfEvidence[] = [
  {id: 1, date: '21/05/2015', name: 'drap ensanglanté', description: 'trouvé sur le lit',
   listComment: [], listPhoto: [], listCase: [], listTag: []},
   {id: 1, date: '21/05/2015', name: 'drap ensanglanté', description: 'trouvé sur le lit',
   listComment: [], listPhoto: [], listCase: [], listTag: []},
];

