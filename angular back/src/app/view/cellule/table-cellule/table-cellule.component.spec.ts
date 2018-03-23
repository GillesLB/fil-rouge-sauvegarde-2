import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCelluleComponent } from './table-cellule.component';

describe('TableCelluleComponent', () => {
  let component: TableCelluleComponent;
  let fixture: ComponentFixture<TableCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCelluleComponent ]
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
