import { TestBed } from '@angular/core/testing';

import { CadastroGerenteService } from './cadastro-gerente.service';

describe('CadastroGerenteService', () => {
  let service: CadastroGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
