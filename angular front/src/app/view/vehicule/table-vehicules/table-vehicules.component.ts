import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculeService } from '../../../controller/vehicule.service';
import { MatTableDataSource, MatPaginator, MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-table-vehicules',
  templateUrl: './table-vehicules.component.html',
  styleUrls: ['./table-vehicules.component.css']
})
export class TableVehiculesComponent implements OnInit {
  // tableau des colonnes du tableau affichées
  vehiculeColumns = ['date', 'model', 'brand', 'color', 'licensePlate', 'updateDate'];
  // source des informations envoyées dans le tableau
  vehiculeSource;
  errText: string;

  // Pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    // requête au chargement de la page
    this.vehiculeService.getVehicules().subscribe(
      cases => {
      this.vehiculeSource = new MatTableDataSource(cases);
      this.vehiculeSource.paginator = this.paginator; });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.vehiculeSource.filter = filterValue;
  }
}
