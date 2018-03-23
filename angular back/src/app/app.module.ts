import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './view/login/login.component';
import { TableCaseComponent } from './view/tables/table-case/table-case.component';
import { TableWeaponComponent } from './view/tables/table-weapon/table-weapon.component';
import { TableVehiculeComponent } from './view/tables/table-vehicule/table-vehicule.component';
import { TablePieceofevidenceComponent } from './view/tables/table-pieceofevidence/table-pieceofevidence.component';
import { TableWitnessComponent } from './view/tables/table-witness/table-witness.component';
import { TableVictimComponent } from './view/tables/table-victim/table-victim.component';
import { TableSuspectComponent } from './view/tables/table-suspect/table-suspect.component';
import { PageAffaireComponent } from './view/pages/page-affaire/page-affaire.component';
import { ExploreTablesComponent } from './view/pages/page-affaire/explore-tables/explore-tables.component';
import { MessageAffaireComponent } from './view/pages/page-affaire/message-affaire/message-affaire.component';
import { AffaireService } from './controller/affaire.service';
import { PopupVehiculeComponent } from './view/popup/popup-vehicule/popup-vehicule.component';
import { PopupWeaponComponent } from './view/popup/popup-weapon/popup-weapon.component';
import { PopupPieceofevidenceComponent } from './view/popup/popup-pieceofevidence/popup-pieceofevidence.component';
import { PopupService } from './controller/popup.service';
import { CaseService } from './controller/case.service';
import { HttpClientModule } from '@angular/common/http';
import { PoeService } from './controller/poe.service';
import { SuspectService } from './controller/suspect.service';
import { VehiculeService } from './controller/vehicule.service';
import { VictimService } from './controller/victim.service';
import { WeaponService } from './controller/weapon.service';
import { WitnessService } from './controller/witness.service';
import { CreateAffaireComponent } from './view/pages/create-affaire/create-affaire.component';
import { EditAffaireComponent } from './view/pages/edit-affaire/edit-affaire.component';
import { EditVehiculeComponent } from './view/pages/edit-vehicule/edit-vehicule.component';
import { VehiculeComponent } from './view/vehicule/vehicule.component';
import { WeaponComponent } from './view/weapon/weapon.component';
import { DetailVehiculeComponent } from './view/vehicule/detail-vehicule/detail-vehicule.component';
import { TableVehiculesComponent } from './view/vehicule/table-vehicules/table-vehicules.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CelluleComponent } from './view/cellule/cellule.component';
import { DetailCelluleComponent } from './view/cellule/detail-cellule/detail-cellule.component';
import { TableCelluleComponent } from './view/cellule/table-cellule/table-cellule.component';
import { CreateCelluleComponent } from './view/cellule/create-cellule/create-cellule.component';
import { CelluleService } from './controller/cellule.service';
import { CreateVehiculeComponent } from './view/vehicule/create-vehicule/create-vehicule.component';
import { DetailWeaponComponent } from './view/weapon/detail-weapon/detail-weapon.component';
import { EditWeaponComponent } from './view/pages/edit-weapon/edit-weapon.component';
import { FormWeaponComponent } from './view/weapon/form-weapon/form-weapon.component';
import { TableWeaponsComponent } from './view/weapon/table-weapons/table-weapons.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableCaseComponent,
    TableWeaponComponent,
    TableVehiculeComponent,
    TablePieceofevidenceComponent,
    TableWitnessComponent,
    TableVictimComponent,
    TableSuspectComponent,
    PageAffaireComponent,
    ExploreTablesComponent,
    MessageAffaireComponent,
    PopupVehiculeComponent,
    PopupWeaponComponent,
    PopupPieceofevidenceComponent,
    CreateAffaireComponent,
    CreateVehiculeComponent,
    FormWeaponComponent,
    EditAffaireComponent,
    EditVehiculeComponent,
    EditWeaponComponent,
    VehiculeComponent,
    WeaponComponent,
    DetailVehiculeComponent,
    DetailWeaponComponent,
    TableVehiculesComponent,
    TableWeaponsComponent,
    DashboardComponent,
    CelluleComponent,
    DetailCelluleComponent,
    TableCelluleComponent,
    CreateCelluleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [PopupVehiculeComponent, PopupWeaponComponent],
  providers: [AffaireService, PopupService, CaseService, PoeService, SuspectService,
     VehiculeService, VictimService, WeaponService, WitnessService, CelluleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
