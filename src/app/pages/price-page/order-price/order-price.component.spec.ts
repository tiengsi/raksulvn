import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderPriceComponent } from './order-price.component';

describe('OrderPriceComponent', () => {
  let component: OrderPriceComponent;
  let fixture: ComponentFixture<OrderPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have addToCart method', () => {
    expect(component.addToCart).toBeDefined();
  });

  it('addToCart should be callable', () => {
    spyOn(component, 'addToCart');
    component.addToCart();
    expect(component.addToCart).toHaveBeenCalled();
  });

  // Add more test cases for addToCart as needed.
});
