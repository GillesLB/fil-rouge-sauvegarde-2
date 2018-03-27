import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../../model/vehicule';
import { PopupService } from '../../../controller/popup.service';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../../controller/vehicule.service';
import { MatTableDataSource } from '@angular/material';
import { CaseService } from '../../../controller/case.service';
import { Case } from '../../../model/case';

@Component({
  selector: 'app-table-vehicule',
  templateUrl: './table-vehicule.component.html',
  styleUrls: ['./table-vehicule.component.css']
})
export class TableVehiculeComponent implements OnInit {
  id: number;
  errText: string;
  vehiculeColumns = ['marque', 'model', 'color', 'licensePlate', 'createDate', 'updateDate', 'edit', 'delete'];
  policeCase: Case;
  vehiculeSource;
  constructor(
    public popupService: PopupService,
    private route: ActivatedRoute,
    private vehiculeService: VehiculeService,
  private caseService: CaseService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
      this.caseService.getCase(this.id).subscribe(
        data => this.vehiculeSource = new MatTableDataSource(data.vehicule),
        err => this.errText = 'la requête a échouée'
      );
    }

// ouverture du popup avec le contenu de la ligne en paramètre
  dialogEdit(row) {
    this.popupService.openEditVehicule(row);
  }

  dialogDeleteLink(row) {
    this.popupService.openDLinkVehicule(row);
  }
}
