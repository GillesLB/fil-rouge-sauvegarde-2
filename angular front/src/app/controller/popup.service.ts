import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Case } from '../model/case';
import { PopupVehiculeComponent } from '../view/popup/popup-vehicule/popup-vehicule.component';
import { Vehicule } from '../model/vehicule';
import { PopupDeleteLinkComponent } from '../view/popup/popup-delete-link/popup-delete-link.component';

@Injectable()
export class PopupService {

  constructor(public dialog: MatDialog) { }

// ouverture du popup (dialog) avec le contenu de la ligne en paramètre
  openEditVehicule(row): void {
    const dialogRef = this.dialog.open(PopupVehiculeComponent, {
      width: '500px',
      data: row,
    });
  }

  openDLinkVehicule(id: number): void {
    const dialogRef = this.dialog.open(PopupDeleteLinkComponent, {
    data: id});
  }
}
