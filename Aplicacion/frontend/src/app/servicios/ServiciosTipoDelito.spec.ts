import { TestBed, inject } from '@angular/core/testing';

import { ServiciosTipoDelito } from './ServiciosTipoDelito';

describe('PeriodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosTipoDelito]
    });
  });

  it('should be created', inject([ServiciosTipoDelito], (service: ServiciosTipoDelito) => {
    expect(service).toBeTruthy();
  }));
});