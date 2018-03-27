import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCelluleComponent } from './create-cellule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CelluleService } from '../../../controller/cellule.service';
import { HttpClientModule } from '@angular/common/http';

describe('CreateCelluleComponent', () => {
  let component: CreateCelluleComponent;
  let fixture: ComponentFixture<CreateCelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCelluleComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [NgForm, CelluleService],
      imports: [FormsModule, HttpClientModule]
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
