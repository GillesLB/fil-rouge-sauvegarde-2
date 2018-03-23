import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVictimComponent } from './table-victim.component';

describe('TableVictimComponent', () => {
  let component: TableVictimComponent;
  let fixture: ComponentFixture<TableVictimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
