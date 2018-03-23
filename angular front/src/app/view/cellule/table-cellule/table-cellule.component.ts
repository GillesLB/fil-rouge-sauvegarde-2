import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { CelluleService } from '../../../controller/cellule.service';

@Component({
  selector: 'app-table-cellule',
  templateUrl: './table-cellule.component.html',
  styleUrls: ['./table-cellule.component.css']
})
export class TableCelluleComponent implements OnInit {
  celluleColumns = ['id', 'name', 'model', 'color'];
  celluleSource;
  errText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private celluleService: CelluleService) { }

  ngOnInit() {
    this.celluleService.getCellules().subscribe(
      data => {
        this.celluleSource = new MatTableDataSource(data);
      this.celluleSource.paginator = this.paginator; });

  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.celluleSource.filter = filterValue;
  }
}
