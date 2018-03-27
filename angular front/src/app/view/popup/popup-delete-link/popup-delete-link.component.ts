import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Case } from '../../../model/case';
import { Vehicule } from '../../../model/vehicule';
import { VehiculeService } from '../../../controller/vehicule.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-popup-delete-link',
  templateUrl: './popup-delete-link.component.html',
  styleUrls: ['./popup-delete-link.component.css']
})
export class PopupDeleteLinkComponent implements OnInit {
  idCase;

  constructor(public dialogRef: MatDialogRef<PopupDeleteLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private vehiculeService: VehiculeService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    // this.idCase = +this.route.paramMap.subscribe(params => this.idCase = +params.get('id'));
    // this.idCase = +this.route.snapshot
    console.log(this.idCase);

  }

  close() {
    this.dialogRef.close();
  }

  deleteLink() {
    this.vehiculeService.deleteVehiculeLink(this.idCase, this.data).subscribe();
  }

}
