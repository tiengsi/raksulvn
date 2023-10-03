import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricePageComponent } from './price-page.component';
import { PricePageService } from './price-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PricePageComponent', () => {
  let component: PricePageComponent;
  let fixture: ComponentFixture<PricePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricePageComponent],
      imports: [HttpClientTestingModule],
      providers: [PricePageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch price data when getPrice is called', () => {
    const paperSize = 'A4';
    const mockResponse = { /* Define mock data from the API */ };

    spyOn(component['priceService'], 'getPrice').and.returnValue(of(mockResponse));

    component.getPrice(paperSize);

    expect(component.priceData).toEqual(mockResponse);
  });

  it('should set selectedIndex when currentIndex is called', () => {
    const mockIndex = { /* Define mock data for selectedIndex */ };

    component.currentIndex(mockIndex);

    expect(component.selectedIndex).toEqual(mockIndex);
  });
});
