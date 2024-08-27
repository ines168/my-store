import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetailsComponent } from './product-item-details.component';

describe('ProductItemDetailsComponent', () => {
  let component: ProductItemDetailsComponent;
  let fixture: ComponentFixture<ProductItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
