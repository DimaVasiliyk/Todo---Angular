/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SesionStorageService } from './session-storage.service';

describe('Service: Storage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SesionStorageService]
    });
  });

  it('should ...', inject([SesionStorageService], (service: SesionStorageService) => {
    expect(service).toBeTruthy();
  }));
});
