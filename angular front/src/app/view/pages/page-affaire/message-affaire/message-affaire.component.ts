import { Component, OnInit, ViewChild } from '@angular/core';
import { AffaireService } from '../../../../controller/affaire.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


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

  constructor(private affaireService: AffaireService) { }

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
  {date: '21/05/1983', description : 'message 1', name: 'Gérôme'},
  {date: '21/05/1983', description : 'message 2', name: 'Toto'},
];

