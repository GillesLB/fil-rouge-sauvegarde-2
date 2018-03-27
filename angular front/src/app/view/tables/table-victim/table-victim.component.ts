import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-victim',
  templateUrl: './table-victim.component.html',
  styleUrls: ['./table-victim.component.css']
})
export class TableVictimComponent implements OnInit {
  victimColumns = ['firstName', 'lastName', 'size', 'weight', 'button'];
  victimSource;
  constructor() { }

  ngOnInit() {
  }

}
