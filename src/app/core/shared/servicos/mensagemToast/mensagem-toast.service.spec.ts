import { TestBed } from '@angular/core/testing';

import { MensagemToastService } from './mensagem-toast.service';

describe('MensagemToastService', () => {
  let service: MensagemToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
