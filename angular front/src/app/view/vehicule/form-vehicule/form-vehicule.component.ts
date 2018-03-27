import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicule } from '../../../model/vehicule';
import { VehiculeService } from '../../../controller/vehicule.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-vehicule',
  templateUrl: './form-vehicule.component.html',
  styleUrls: ['./form-vehicule.component.css']
})
export class FormVehiculeComponent implements OnInit {
  vehicule: Vehicule;
  editing: boolean;

  constructor(private vehiculeService: VehiculeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // récupération du path
    const urlSegment = this.route.snapshot.url[0];
    // mode eidt en fonction de l'uri
    if (urlSegment && urlSegment.path === 'edit') {
      // récupération de l'ID du vehicule
      const id = +this.route.parent.snapshot.paramMap.get('id');
      // récupération de l'objet véhicule
      this.vehiculeService.getVehicule(id).subscribe(
        data => this.vehicule = data);
      this.editing = true;
    } else {
      // mode création
    this.editing = false;
    this.vehicule = {
      model: '',
      marque: '',
      color: '',
      licensePlate: '',
      createDate: null,
      updateDate: null,
      listCase:  [], };
    }
  }

  // création du véhicule
  onSubmit(form: NgForm) {
    if (this.editing) {
        this.vehiculeService.updateVehicule(this.vehicule).subscribe();
    } else {
    this.vehiculeService.createVehicule(this.vehicule).subscribe();
    }
  }

  onCreate() {
    if (!this.editing) {
      this.router.navigate(['/vehicules']);
    }
  }
}

