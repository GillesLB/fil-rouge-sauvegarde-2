import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWitnessComponent } from './table-witness.component';

describe('TableWitnessComponent', () => {
  let component: TableWitnessComponent;
  let fixture: ComponentFixture<TableWitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWitnessComponent ]
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
