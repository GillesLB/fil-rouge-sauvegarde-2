import { Component, OnInit, ViewChild } from '@angular/core';
import { WeaponService } from '../../core/api/weapon.service';
import { MatTableDataSource, MatPaginator, MatIconRegistry, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-weapons',
  templateUrl: './table-weapons.component.html',
  styleUrls: ['./table-weapons.component.css']
})

export class TableWeaponsComponent implements OnInit {
  // différentes colonnes du tableau
  weaponColumns = ['createDate', 'type', 'modele', 'updateDate'];
  // infos envoyées dans le tableau
  weaponSource;

  // mise en page : nb éléments par page
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // mise en page : tri par colonne
  @ViewChild(MatSort) sort: MatSort;

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    // requête au chargement de la page
    this.weaponService.getWeapons().subscribe(
      cases => {
        this.weaponSource = new MatTableDataSource(cases);
        this.weaponSource.paginator = this.paginator;
        this.weaponSource.sort = this.sort;
      });
  }

  // recherche dans le tableau
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // enleve les espaces
    filterValue = filterValue.toLowerCase(); // passe tout en minuscule
    this.weaponSource.filter = filterValue;
  }

}
