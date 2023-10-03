import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PricePageService } from './price-page.service';
import { API_CONFIG } from 'src/environments/config';

describe('PricePageService', () => {
  let service: PricePageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PricePageService],
    });

    service = TestBed.inject(PricePageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should send GET request with correct URL', () => {
    const paperSize = 'A4';
    const mockResponse = { /* Define mock data from the API */ };

    service.getPrice(paperSize).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${API_CONFIG.apiUrl}?paper_size=${paperSize}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });
});
