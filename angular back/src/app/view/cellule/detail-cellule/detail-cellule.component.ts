import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellule } from '../../../model/cellule';
import { CelluleService } from '../../../controller/cellule.service';

@Component({
  selector: 'app-detail-cellule',
  templateUrl: './detail-cellule.component.html',
  styleUrls: ['./detail-cellule.component.css']
})
export class DetailCelluleComponent implements OnInit {

  id: number;
  cellule: Cellule; // undefined
  errText: string;
  title = {
    'text-align': 'center'
  };
  constructor(private route: ActivatedRoute, private router: Router, private celluleService: CelluleService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.celluleService.getCellule(this.id).subscribe(
      data => this.cellule = data,
      error => this.errText = 'La requête a échouée');
  }
  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  delete() {
    this.celluleService.deleteCellule(this.id).subscribe( () =>
      this.router.navigate(['../'], {relativeTo: this.route}));
  }

}
