import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../../model/vehicule';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../../controller/vehicule.service';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {

  id: number;
  vehicule: Vehicule; // undefined
  errText: string;
  title = {
    'text-align': 'center'
  };

  constructor(private route: ActivatedRoute, private vehiculeService: VehiculeService, private router: Router) {
    console.log(route.snapshot.url); // array of url segments
    console.log(route.snapshot.url[0].path);
    console.log(route.snapshot.url[1].path);
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.vehiculeService.getVehicule(this.id).subscribe(
      data => this.vehicule = data,
      error => this.errText = 'la requête a échouée');
    this.vehiculeService.vehicule = this.vehicule;
    console.log(this.vehicule);

  }

  testVehicule() {
    console.log(this.vehicule);
  }

  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  delete() {
    this.vehiculeService.deleteVehicule(this.id).subscribe( () =>
      this.router.navigate(['../'], {relativeTo: this.route}));
  }
}
