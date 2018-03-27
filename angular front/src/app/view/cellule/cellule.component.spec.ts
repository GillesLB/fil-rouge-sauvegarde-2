import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluleComponent } from './cellule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Case } from '../../model/case';
import { By } from '@angular/platform-browser';



describe('CelluleComponent', () => {
  let component: CelluleComponent;
  let fixture: ComponentFixture<CelluleComponent>;
  let expected = '';
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelluleComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelluleComponent);
    component = fixture.componentInstance; // to acces properties and methods
    element = fixture.nativeElement; // to access DOM elements
    de = fixture.debugElement; // test.helper
    fixture.detectChanges();
    expected = 'Hello World';

  });

  afterEach(() => {
    expected = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should be true', () => {
    expect(component.editing).toBe(true);
  });
  it('should add 1', () => {
    expect(component.nombre).toBe(0);
    component.addition();
    expect(component.nombre).toBe(1);
    expect(component.nombre).toBeGreaterThan(0);
  });
  it('should be undefined', () => {
    expect(component.policeCase).toBeUndefined();
  });
  it('should contain deux', () => {
    expect(component.arrayList).toContain('deux');
  });
  it('should be Hello World', () => {
    expect(component.helloWorld()).toMatch(expected);
  });

  it('should render Hello World', async(() => {
    component.name = 'World';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('h1').innerText).toBe('Hello World!');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
    });
  }));
});

