import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { PageAffaireComponent } from './view/pages/page-affaire/page-affaire.component';
import { CreateAffaireComponent } from './view/pages/create-affaire/create-affaire.component';
import { VehiculeComponent } from './view/vehicule/vehicule.component';
import { WeaponComponent } from './view/weapon/weapon.component';
import { DetailVehiculeComponent } from './view/vehicule/detail-vehicule/detail-vehicule.component';
import { DetailWeaponComponent } from './view/weapon/detail-weapon/detail-weapon.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CelluleComponent } from './view/cellule/cellule.component';
import { DetailCelluleComponent } from './view/cellule/detail-cellule/detail-cellule.component';
import { CreateCelluleComponent } from './view/cellule/create-cellule/create-cellule.component';
import { CreateVehiculeComponent } from './view/vehicule/create-vehicule/create-vehicule.component';
import { FormWeaponComponent } from './view/weapon/form-weapon/form-weapon.component';

// router table
const routes: Routes = [
 {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'dashboard', component: DashboardComponent },
 {path: 'newcase', component: CreateAffaireComponent},
 {path: 'affaire', component: PageAffaireComponent},
 {path: 'vehicules', component: VehiculeComponent},
 {path: 'vehicules/:id', component: DetailVehiculeComponent,
  children: [{path: 'edit', component: CreateVehiculeComponent}]},
 {path: 'newvehicule', component: CreateVehiculeComponent},
 {path: 'weapons', component: WeaponComponent},
 {path: 'weapons/:id', component: DetailWeaponComponent,
  children: [{path: 'edit', component: FormWeaponComponent}]},
 {path: 'newweapon', component: FormWeaponComponent},
 {path: 'cellules', component: CelluleComponent},
 {path: 'cellules/:id', component: DetailCelluleComponent},
 {path: 'newcellule', component: CreateCelluleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
