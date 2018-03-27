import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../../controller/case.service';
import { Case } from '../../../model/case';

@Component({
  selector: 'app-page-affaire',
  templateUrl: './page-affaire.component.html',
  styleUrls: ['./page-affaire.component.css']
})
export class PageAffaireComponent implements OnInit {
  affaire: Case;
  errtext: string;

  constructor(private route: ActivatedRoute, private caseService: CaseService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id).subscribe(
      data => this.affaire = data,
      err => this.errtext = 'la requête a échouée'
    );
  }

  test() {
    console.log(this.affaire.vehicule[0].model);
  }



}
