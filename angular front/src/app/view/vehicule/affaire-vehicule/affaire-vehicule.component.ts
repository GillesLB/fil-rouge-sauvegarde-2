import { Component, OnInit } from '@angular/core';
import { Case } from '../../../model/case';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../../controller/vehicule.service';
import { Vehicule } from '../../../model/vehicule';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-affaire-vehicule',
  templateUrl: './affaire-vehicule.component.html',
  styleUrls: ['./affaire-vehicule.component.css']
})
export class AffaireVehiculeComponent implements OnInit {
  id: number;
  errText: string;
  caseColumns = ['name', 'description'];
  vehiculeSource;
  caseSource;
  constructor(private route: ActivatedRoute,
    private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.vehiculeService.getVehicule(this.id).subscribe(
      data => this.vehiculeSource = data,
      err => this.errText = 'La requête a échouée'
    );
    console.log(this.vehiculeSource);
    this.caseSource = new MatTableDataSource(this.vehiculeSource.listCase);
    console.log(this.caseSource);
  }

}
