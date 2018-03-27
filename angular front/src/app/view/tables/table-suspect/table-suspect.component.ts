import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-suspect',
  templateUrl: './table-suspect.component.html',
  styleUrls: ['./table-suspect.component.css']
})
export class TableSuspectComponent implements OnInit {
  suspectColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  suspectSource;
  constructor() { }

  ngOnInit() {
  }

}
