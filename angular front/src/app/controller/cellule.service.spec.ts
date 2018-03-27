import { TestBed, inject } from '@angular/core/testing';
import { CelluleService } from './cellule.service';
import { HttpClientModule } from '@angular/common/http';


const celluleU = {
  id: 1,
  name: 'augue',
  model: 'scelerisque',
  color: 'Luke'
};

describe('service: CelluleService', () => {
  let service: CelluleService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CelluleService,
      ]
    });
  });

  beforeEach(inject([CelluleService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return celluleU', () => {
    const cellules = service.get();
    expect(cellules).toContain('en');
    expect(cellules).toContain('es');
    expect(cellules).toContain('fr');
    expect(cellules.length).toBe(3);
  });
  it('should equal json', () => {
    service.getJson().subscribe( data => {
      expect(data).toEqual(celluleU);
    });
  });
});
