import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVehiculesComponent } from './table-vehicules.component';

describe('TableVehiculesComponent', () => {
  let component: TableVehiculesComponent;
  let fixture: ComponentFixture<TableVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
