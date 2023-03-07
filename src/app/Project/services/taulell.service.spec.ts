/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaulellService } from './taulell.service';

describe('Service: Taulell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaulellService]
    });
  });

  it('should ...', inject([TaulellService], (service: TaulellService) => {
    expect(service).toBeTruthy();
  }));
});
