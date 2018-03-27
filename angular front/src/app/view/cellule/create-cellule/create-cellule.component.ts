import { Component, OnInit } from '@angular/core';
import { Cellule } from '../../../model/cellule';
import { NgForm } from '@angular/forms';
import { CelluleService } from '../../../controller/cellule.service';

@Component({
  selector: 'app-create-cellule',
  templateUrl: './create-cellule.component.html',
  styleUrls: ['./create-cellule.component.css']
})
export class CreateCelluleComponent implements OnInit {
  cellule: Cellule;

  constructor(private celluleService: CelluleService) { }

  ngOnInit() {
    // this.cellule = {
    // name: '',
    //  model: '',
    //  color: '',
   // };
  }

  onSubmit(form: NgForm) {
    this.celluleService.createCellule(this.cellule).subscribe();
  }

}
