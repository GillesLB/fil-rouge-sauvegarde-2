import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffaireComponent } from './page-affaire.component';

describe('PageAffaireComponent', () => {
  let component: PageAffaireComponent;
  let fixture: ComponentFixture<PageAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAffaireComponent ]
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
