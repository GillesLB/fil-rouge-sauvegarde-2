import { Component, OnInit, ViewChild } from '@angular/core';
import { Case } from '../../../model/case';
import { CaseService } from '../../../controller/case.service';
import { MatTableDataSource, MatPaginator} from '@angular/material';


@Component({
  selector: 'app-table-case',
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit {
  caseColumns = ['date', 'name', 'description'];
  caseSource;
  errText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.caseService.getCases().subscribe(
      cases => {
        this.caseSource = new MatTableDataSource(cases);
        this.caseSource.paginator = this.paginator;
      },
      err => this.errText = 'La requête a échouée'
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.caseSource.filter = filterValue;
  }
}


