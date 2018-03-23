import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupVehiculeComponent } from './popup-vehicule.component';

describe('PopupVehiculeComponent', () => {
  let component: PopupVehiculeComponent;
  let fixture: ComponentFixture<PopupVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
