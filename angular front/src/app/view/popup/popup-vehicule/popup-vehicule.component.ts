import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Case } from '../../../model/case';
import { Vehicule } from '../../../model/vehicule';

@Component({
  selector: 'app-popup-vehicule',
  templateUrl: './popup-vehicule.component.html',
  styleUrls: ['./popup-vehicule.component.css']
})
export class PopupVehiculeComponent implements OnInit {

// injection du contenu de la ligne sélectionnée(data)
  constructor(public dialogRef: MatDialogRef<PopupVehiculeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
