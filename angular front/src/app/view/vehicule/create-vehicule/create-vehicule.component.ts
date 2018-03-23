import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicule } from '../../../model/vehicule';
import { VehiculeService } from '../../../controller/vehicule.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})
export class CreateVehiculeComponent implements OnInit {
  vehicule: Vehicule;
  editing: boolean;

  constructor(private vehiculeService: VehiculeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const urlSegment = this.route.snapshot.url[0];
    if (urlSegment && urlSegment.path === 'edit') {
      const id = +this.route.parent.snapshot.paramMap.get('id');
      this.vehiculeService.getVehicule(id).subscribe(
        data => this.vehicule = data
      );
      this.editing = true;
    } else {
      this.vehicule = {
        createDate: '',
        updateDate: '',
        model: '',
        marque: '',
        color: '',
        licensePlate: '',
        description: '',
        listComment: [],
        listPhoto: [],
        listCase: [],
        listTag: [],
      };
    }
  }

  onSubmit(form: NgForm) {
    this.vehiculeService.createVehicule(this.vehicule).subscribe();
    this.router.navigateByUrl('/vehicules');
  }


}
