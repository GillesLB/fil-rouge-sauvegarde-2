import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../../model/case';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  editing = true;
  nombre = 0;
  policeCase: Case;
  arrayList = ['un', 'deux', 'trois'];

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

  changeEditing() {
    // this.editing !== this.editing;
  }

  addition() {
    this.nombre++;
  }

  helloWorld() {
    return 'Hello World';
  }
}
