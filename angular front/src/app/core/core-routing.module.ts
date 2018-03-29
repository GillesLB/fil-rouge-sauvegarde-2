import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageAffaireComponent } from '../modules/pages/page-affaire/page-affaire.component';
import { VehiculeComponent } from '../modules/vehicule/vehicule.component';
import { WeaponComponent } from '../modules/weapon/weapon.component';

const routes: Routes = [
 {path: '', component: NavigationComponent,
  children: [
    {path: '', component: DashboardComponent}
  ]}
];

export const coreRouter = RouterModule.forChild(routes);
