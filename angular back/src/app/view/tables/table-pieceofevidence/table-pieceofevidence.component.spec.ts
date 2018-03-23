import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePieceofevidenceComponent } from './table-pieceofevidence.component';

describe('TablePieceofevidenceComponent', () => {
  let component: TablePieceofevidenceComponent;
  let fixture: ComponentFixture<TablePieceofevidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePieceofevidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePieceofevidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
