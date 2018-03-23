import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTablesComponent } from './explore-tables.component';

describe('ExploreTablesComponent', () => {
  let component: ExploreTablesComponent;
  let fixture: ComponentFixture<ExploreTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
