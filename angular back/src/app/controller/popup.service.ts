import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Case } from '../model/case';
import { PopupVehiculeComponent } from '../view/popup/popup-vehicule/popup-vehicule.component';
import { Vehicule } from '../model/vehicule';

@Injectable()
export class PopupService {

  constructor(public dialog: MatDialog) { }

// ouverture du popup (dialog) avec le contenu de la ligne en paramètre
  openDialog(dataSource): void {
    let dialogRef = this.dialog.open(PopupVehiculeComponent, {
      width: '500px',
      data: dataSource,
    });
  }

}
