import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { PageAffaireComponent } from './view/pages/page-affaire/page-affaire.component';
import { VehiculeComponent } from './view/vehicule/vehicule.component';
import { WeaponComponent } from './view/weapon/weapon.component';
import { DetailVehiculeComponent } from './view/vehicule/detail-vehicule/detail-vehicule.component';
import { DetailWeaponComponent } from './view/weapon/detail-weapon/detail-weapon.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CelluleComponent } from './view/cellule/cellule.component';
import { DetailCelluleComponent } from './view/cellule/detail-cellule/detail-cellule.component';
import { CreateCelluleComponent } from './view/cellule/create-cellule/create-cellule.component';
import { FormWeaponComponent } from './view/weapon/form-weapon/form-weapon.component';
import { FormVehiculeComponent } from './view/vehicule/form-vehicule/form-vehicule.component';
import { PieceOfEvidenceComponent } from './view/piece-of-evidence/piece-of-evidence.component';
import { DetailPieceOfEvidenceComponent } from './view/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { FormPieceOfEvidenceComponent } from './view/piece-of-evidence/form-piece-of-evidence/form-piece-of-evidence.component';


// router table
const routes: Routes = [
 {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'dashboard', component: DashboardComponent },
 {path: 'affaire/:id', component: PageAffaireComponent},
 {path: 'vehicules', component: VehiculeComponent},
 {path: 'vehicules/:id', component: DetailVehiculeComponent,
  children: [{path: 'edit', component: FormVehiculeComponent}]},
 {path: 'newvehicule', component: FormVehiculeComponent},
 {path: 'weapons', component: WeaponComponent},
 {path: 'weapons/:id', component: DetailWeaponComponent,
  children: [{path: 'edit', component: FormWeaponComponent}]},
 {path: 'newweapon', component: FormWeaponComponent},
 {path: 'pieceOfEvidence', component: PieceOfEvidenceComponent},
 {path: 'pieceOfEvidence/:id', component: DetailPieceOfEvidenceComponent,
  children: [{path: 'edit', component: FormPieceOfEvidenceComponent}]},
 {path: 'cellules', component: CelluleComponent},
 {path: 'cellules/:id', component: DetailCelluleComponent},
 {path: 'newcellule', component: CreateCelluleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
