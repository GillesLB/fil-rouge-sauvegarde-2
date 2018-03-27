import { Component, OnInit, ViewChild } from '@angular/core';
import { CaseService } from '../../../../controller/case.service';
import { MatTableDataSource, MatPaginator, MatIconRegistry } from '@angular/material';
import { Case } from '../../../../model/case';

@Component({
  selector: 'app-message-affaire',
  templateUrl: './message-affaire.component.html',
  styleUrls: ['./message-affaire.component.css']
})
export class MessageAffaireComponent implements OnInit {
  messageAffaireColumns = ['date', 'description', 'name'];

  // USER TESTING
  messageAffaireSource = generatedListMessageAffaire;
  errText;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    // this.affaireService.getAffaire().subscribe(
    //   cases => {
    //     this.affaireSource = new MatTableDataSource(cases);
    //     this.affaireSource.paginator = this.paginator;
    //   },
    //   err => this.errText = 'La requête a échouée'
    // );
  }

}

// USER TESTING
export interface Message {
  date: string;
  description: string;
  name: string;
}

// USER TESTING
const generatedListMessageAffaire: Message[] = [
  {date: '26/03/2018', name: 'Gérôme', description : 'Essai de cas 1'},
  {date: '31/12/1999', name: 'Gilles', description : 'Essai de cas 2'},
  {date: '14/07/1989', name: 'Stéphan', description : 'Essai de cas 3'},
  {date: '01/01/1970', name: 'Frédéric', description : 'Essai de cas 4'},
];

