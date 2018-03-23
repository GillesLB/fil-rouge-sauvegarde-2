import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../model/weapon';
import { ActivatedRoute, Router } from '@angular/router';
import { WeaponService } from '../../../controller/weapon.service';


@Component({
  selector: 'app-detail-weapon',
  templateUrl: './detail-weapon.component.html',
  styleUrls: ['./detail-weapon.component.css']
})
export class DetailWeaponComponent implements OnInit {

  id: number;
  weapon: Weapon;
  errText: string;
  title = {
    'text-align': 'center'
  };

  constructor(private weaponService: WeaponService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.weaponService.getWeapon(this.id)
    .subscribe(data =>
      this.weapon = data,
      error => this.errText = 'la requête a échouée');
    this.weaponService.weapon = this.weapon;
    console.log(this.weapon); // test
  }

  testweapon() {
    console.log(this.weapon); // test
  }

  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  delete() {
    this.weaponService.deleteWeapon(this.id)
    .subscribe( () =>
      this.router.navigate(['../'], { relativeTo: this.route }));
  }
}
