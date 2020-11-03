import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});

/*import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/
