import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPieceofevidenceComponent } from './popup-pieceofevidence.component';

describe('PopupPieceofevidenceComponent', () => {
  let component: PopupPieceofevidenceComponent;
  let fixture: ComponentFixture<PopupPieceofevidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPieceofevidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPieceofevidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
