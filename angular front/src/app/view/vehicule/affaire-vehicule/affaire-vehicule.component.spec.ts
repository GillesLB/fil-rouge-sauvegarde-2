import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireVehiculeComponent } from './affaire-vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../../controller/vehicule.service';
import { HttpClientModule } from '@angular/common/http';

describe('AffaireVehiculeComponent', () => {
  let component: AffaireVehiculeComponent;
  let fixture: ComponentFixture<AffaireVehiculeComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireVehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        VehiculeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
