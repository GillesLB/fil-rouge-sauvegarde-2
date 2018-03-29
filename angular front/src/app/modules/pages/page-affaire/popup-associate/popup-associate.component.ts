import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vehicule, Case } from '../../../../core/model';
import { VehiculeService } from '../../../../core/api/vehicule.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-popup-associate',
  templateUrl: './popup-associate.component.html',
  styleUrls: ['./popup-associate.component.css']
})
export class PopupAssociateComponent implements OnInit {
  sections = ['Pièces à Conviction', 'Victimes', 'Suspects', 'Témoins', 'Armes', 'Véhicules'];
  selectedAssociate;
  selectedCreate;
  selectedVehicule;
  vehicules: Vehicule[];
  private searchTerms = new Subject<string>();
  vehiculeSearch: Observable<Vehicule[]>;

  constructor(public dialogRef: MatDialogRef<PopupAssociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehiculeService: VehiculeService) { }

  ngOnInit() {
  // this.vehicules = this.data.vehicule;
    // console.log(this.data.vehicule);
    this.vehiculeService.getVehicules().subscribe(
      data => this.vehicules = data
    );
}
}

