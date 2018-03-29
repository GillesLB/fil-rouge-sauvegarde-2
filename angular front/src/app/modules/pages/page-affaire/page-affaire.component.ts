import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../../core/api/case.service';
import { Case, Vehicule } from '../../../core/model';
import { NgForm } from '@angular/forms';
import { PopupAssociateComponent } from './popup-associate/popup-associate.component';
import { MatDialog } from '@angular/material';
import { VehiculeService } from '../../../core/api/vehicule.service';

@Component({
  selector: 'app-page-affaire',
  templateUrl: './page-affaire.component.html',
  styleUrls: ['./page-affaire.component.css']
})
export class PageAffaireComponent implements OnInit {
  policeCase: Case;
  vehicule: Vehicule;
  errtext: string;

  constructor(private route: ActivatedRoute, private caseService: CaseService,
    public dialog: MatDialog, private vehiculeService: VehiculeService) { }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.policeCase = data,
      err => this.errtext = 'la requête a échouée'
    );
  }

  onSubmit(ngForm: NgForm, data: Case) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupAssociateComponent);
  }

  deleteLink(row) {
    console.log(this.policeCase);
// this.vehiculeService.deleteVehiculeLink(this.policeCase.id, this.row.id).subscribe();
  }



}
