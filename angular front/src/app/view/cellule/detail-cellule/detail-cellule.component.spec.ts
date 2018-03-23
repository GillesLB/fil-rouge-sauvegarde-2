import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCelluleComponent } from './detail-cellule.component';

describe('DetailCelluleComponent', () => {
  let component: DetailCelluleComponent;
  let fixture: ComponentFixture<DetailCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCelluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
