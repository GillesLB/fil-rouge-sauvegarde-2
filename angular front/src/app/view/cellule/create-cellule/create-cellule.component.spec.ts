import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCelluleComponent } from './create-cellule.component';

describe('CreateCelluleComponent', () => {
  let component: CreateCelluleComponent;
  let fixture: ComponentFixture<CreateCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCelluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
