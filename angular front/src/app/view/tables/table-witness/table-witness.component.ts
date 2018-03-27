import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-witness',
  templateUrl: './table-witness.component.html',
  styleUrls: ['./table-witness.component.css']
})
export class TableWitnessComponent implements OnInit {
  witnessColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  witnessSource;
  constructor() { }

  ngOnInit() {
  }

}
