import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWeaponComponent } from './table-weapon.component';

describe('TableWeaponComponent', () => {
  let component: TableWeaponComponent;
  let fixture: ComponentFixture<TableWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
