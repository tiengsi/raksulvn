import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { API_CONFIG } from 'src/environments/config';

@Injectable({
  providedIn: 'root',
})
export class PricePageService {
  private apiUrl = API_CONFIG.apiUrl; // Sử dụng biến apiUrl từ file config

  constructor(private http: HttpClient) {}

  getPrice(paperSize: string): Observable<any> {
    // Tạo URL với tham số paper_size
    const url = `${this.apiUrl}?paper_size=${paperSize}`;

    // Gửi yêu cầu GET đến API
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Lỗi khi gọi API:', error);
        return throwError(error); // Chuyển tiếp lỗi để xử lý ở thành phần gọi API
      })
    );
  }
}
