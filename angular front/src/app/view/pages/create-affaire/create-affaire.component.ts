import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Case } from '../../../model/case';
import { AffaireService } from '../../../controller/affaire.service';
import { CaseService } from '../../../controller/case.service';

@Component({
  selector: 'app-create-affaire',
  templateUrl: './create-affaire.component.html',
  styleUrls: ['./create-affaire.component.css']
})
export class CreateAffaireComponent implements OnInit {
  policeCase: Case;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.policeCase = {
      id: 1,
    date: '',
    name: '',
    description: '',
    listComment: [],
    listUser: [],
    listPhoto: [],
    listPoE: [],
    listVictim: [],
    listSuspect: [],
    listWitness: [],
    listWeapon: [],
    vehicule: [],
    listTag: [],
};

  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
      this.caseService.createAffaire(this.policeCase).subscribe();
    }

    postman() {
      console.log(this.policeCase);
    }
}
