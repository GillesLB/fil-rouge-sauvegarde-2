import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../../model/vehicule';
import { AffaireService } from '../../../controller/affaire.service';
import { PopupService } from '../../../controller/popup.service';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../../controller/vehicule.service';

@Component({
  selector: 'app-table-vehicule',
  templateUrl: './table-vehicule.component.html',
  styleUrls: ['./table-vehicule.component.css']
})
export class TableVehiculeComponent implements OnInit {
  id: number;
  errText: string;
  vehiculeColumns = ['date', 'name', 'brand', 'color', 'licensePlate', 'description'];
  vehiculeSource;
  constructor(
    public affaireService: AffaireService,
    public popupService: PopupService,
    private route: ActivatedRoute,
    private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.route.snapshot.url[1].path === 'vehicules') {
      this.vehiculeService.getVehicule(this.id).subscribe(
        data => this.vehiculeSource = data,
        err => this.errText = 'la requête a échouée'
      );
    }
  }

// ouverture du popup avec le contenu de la ligne en paramètre
  openDialog(row) {
    this.popupService.openDialog(row);
  }

}
