import { Component, OnInit, Inject } from '@angular/core';
import { Vehicule } from '../../../../../core/model';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PageAffaireComponent } from '../../page-affaire.component';
import { PopupAssociateComponent } from '../popup-associate.component';

@Component({
  selector: 'app-associate-vehicule',
  templateUrl: './associate-vehicule.component.html',
  styleUrls: ['./associate-vehicule.component.css']
})
export class AssociateVehiculeComponent implements OnInit {
  vehicule: Vehicule;

  constructor(private affaire: PageAffaireComponent,
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.vehicule = {
      model: '',
      marque: '',
      color: '',
      licensePlate: '',
      createDate: null,
      updateDate: null,
      listCase:  [], };
    }

    onSubmit(ngForm: NgForm) {
      this.affaire.onSubmit(ngForm, this.data);
      this.dialogRef.close();
    }
}

