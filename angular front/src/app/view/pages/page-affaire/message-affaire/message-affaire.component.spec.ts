import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAffaireComponent } from './message-affaire.component';

describe('MessageAffaireComponent', () => {
  let component: MessageAffaireComponent;
  let fixture: ComponentFixture<MessageAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
