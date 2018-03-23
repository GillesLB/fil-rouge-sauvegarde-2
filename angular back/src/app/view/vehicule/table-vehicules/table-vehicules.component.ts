import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculeService } from '../../../controller/vehicule.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-table-vehicules',
  templateUrl: './table-vehicules.component.html',
  styleUrls: ['./table-vehicules.component.css']
})
export class TableVehiculesComponent implements OnInit {
  vehiculeColumns = ['date', 'model', 'brand', 'color', 'licensePlate', 'updateDate'];
  vehiculeSource;
  errText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
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
