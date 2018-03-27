import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCelluleComponent } from './table-cellule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { CelluleService } from '../../../controller/cellule.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableCelluleComponent', () => {
  let component: TableCelluleComponent;
  let fixture: ComponentFixture<TableCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCelluleComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule],
      providers: [
        CelluleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
