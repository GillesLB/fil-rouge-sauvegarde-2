import { Component, OnInit, ViewChild } from '@angular/core';
import { CaseService } from '../../../../core/api/case.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-message-affaire',
  templateUrl: './message-affaire.component.html',
  styleUrls: ['./message-affaire.component.css']
})
export class MessageAffaireComponent implements OnInit {
  messageAffaireColumns = ['date', 'name', 'description'];
// USER TESTING
  messageAffaireSource = generatedListMessageAffaire;

  constructor() { }

  ngOnInit() {
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
