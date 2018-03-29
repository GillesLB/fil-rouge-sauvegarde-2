import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVictimComponent } from './table-victim.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';

describe('TableVictimComponent', () => {
  let component: TableVictimComponent;
  let fixture: ComponentFixture<TableVictimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVictimComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
