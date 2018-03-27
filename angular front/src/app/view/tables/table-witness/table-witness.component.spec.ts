import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWitnessComponent } from './table-witness.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';

describe('TableWitnessComponent', () => {
  let component: TableWitnessComponent;
  let fixture: ComponentFixture<TableWitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWitnessComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
