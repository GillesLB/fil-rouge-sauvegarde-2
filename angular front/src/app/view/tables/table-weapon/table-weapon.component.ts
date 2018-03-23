import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../model/weapon';
import { AffaireService } from '../../../controller/affaire.service';
import { PopupService } from '../../../controller/popup.service';
import { ActivatedRoute } from '@angular/router';
import { WeaponService } from '../../../controller/weapon.service';

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
    public affaireService: AffaireService,
    public popupService: PopupService,
    private route: ActivatedRoute,
    private weaponService: WeaponService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.url[1].path === 'armes') {
      this.weaponService.getWeapon(this.id).subscribe(
        data => this.weaponSource = data,
        err => this.errText = 'la requête a échouée'
      );
    }
  }

// ouverture du popup avec le contenu de la ligne en paramètre
  openDialog(row) {
    this.popupService.openDialog(row);
  }
}
