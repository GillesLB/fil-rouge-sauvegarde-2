import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffaireComponent } from './page-affaire.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../../controller/case.service';
import { HttpClientModule } from '@angular/common/http';

describe('PageAffaireComponent', () => {
  let component: PageAffaireComponent;
  let fixture: ComponentFixture<PageAffaireComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAffaireComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        CaseService
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
