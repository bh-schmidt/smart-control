/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrayHelper } from './array-helper';

describe('Service: ArrayHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayHelper]
    });
  });

  it('should ...', inject([ArrayHelper], (service: ArrayHelper) => {
    expect(service).toBeTruthy();
  }));
});
