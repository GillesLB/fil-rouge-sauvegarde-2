import { Component, OnInit, ViewChild } from '@angular/core';
import { WeaponService } from '../../../controller/weapon.service';
import { MatTableDataSource, MatPaginator, MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-table-weapons',
  templateUrl: './table-weapons.component.html',
  styleUrls: ['./table-weapons.component.css']
})

export class TableWeaponsComponent implements OnInit {
  weaponColumns = ['createDate', 'type', 'modele', 'updateDate'];
  weaponSource;
  errText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    this.weaponService.getWeapons().subscribe(
      cases => {
        this.weaponSource = new MatTableDataSource(cases);
        this.weaponSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // enleve les espaces
    filterValue = filterValue.toLowerCase();
    this.weaponSource.filter = filterValue;
  }

}
