import { TestBed } from '@angular/core/testing';

import { FormatacaoEConversaoService } from './formatacao-econversao.service';

describe('FormatacaoEConversaoService', () => {
  let service: FormatacaoEConversaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatacaoEConversaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
