import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../model/weapon';
import { PopupService } from '../../../controller/popup.service';
import { ActivatedRoute } from '@angular/router';
import { WeaponService } from '../../../controller/weapon.service';
import { CaseService } from '../../../controller/case.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-weapon',
  templateUrl: './table-weapon.component.html',
  styleUrls: ['./table-weapon.component.css']
})
export class TableWeaponComponent implements OnInit {
  id: number;
  errText: string;

  weaponColumns = ['createDate', 'type', 'modele', 'updateDate'];
  weaponSource;
  constructor(
    public caseService: CaseService,
    public popupService: PopupService,
    private route: ActivatedRoute,
    private weaponService: WeaponService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.weaponSource = new MatTableDataSource(data.weapon),
      err => this.errText = 'La requête a échouée'
    );
  }

// ouverture du popup avec le contenu de la ligne en paramètre
  // openDialog(row) {
  //  this.popupService.openDialog(row);
  // }
}
