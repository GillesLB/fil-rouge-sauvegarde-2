import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Case } from '../../../model/case';
import { Vehicule } from '../../../model/vehicule';
import { VehiculeService } from '../../../controller/vehicule.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup-vehicule',
  templateUrl: './popup-vehicule.component.html',
  styleUrls: ['./popup-vehicule.component.css']
})
export class PopupVehiculeComponent implements OnInit {
  vehicule;

// injection du contenu de la ligne sélectionnée(data)
  constructor(public dialogRef: MatDialogRef<PopupVehiculeComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private vehiculeService: VehiculeService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.vehicule = this.data;
  }
  onSubmit(form: NgForm) {
        this.vehiculeService.updateVehicule(this.vehicule).subscribe();
        this.dialogRef.close();
  }

}
