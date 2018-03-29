import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Case } from './model';
import { Vehicule } from './model';
import { Weapon } from './model';
import { PopupVehiculeComponent } from '../popup/popup-vehicule/popup-vehicule.component';
import { PopupDeleteLinkComponent } from '../popup/popup-delete-link/popup-delete-link.component';


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
