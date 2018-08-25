import { TestBed, inject } from '@angular/core/testing';

import { ServiciosDelito } from './ServiciosDelito';

describe('PeriodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosDelito]
    });
  });

  it('should be created', inject([ServiciosDelito], (service: ServiciosDelito) => {
    expect(service).toBeTruthy();
  }));
});