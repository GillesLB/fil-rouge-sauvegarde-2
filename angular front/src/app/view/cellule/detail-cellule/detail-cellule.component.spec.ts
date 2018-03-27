import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCelluleComponent } from './detail-cellule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { CelluleService } from '../../../controller/cellule.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Mock } from 'protractor/built/driverProviders';

describe('DetailCelluleComponent', () => {
  let component: DetailCelluleComponent;
  let fixture: ComponentFixture<DetailCelluleComponent>;
  const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);
  let service: CelluleService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCelluleComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: {paramMap: Observable.of(convertToParamMap({id: 1}))}},
        {provide: Router, useValue: fakeRouter},
        CelluleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(CelluleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
