import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  // Đây là một Angular Pipe dùng để định dạng số nguyên bằng cách thêm dấu ',' sau mỗi 3 chữ số.

  /**
   * Chuyển đổi một số nguyên thành một chuỗi số đã được định dạng.
   * @param value Giá trị số nguyên cần định dạng.
   * @returns Chuỗi số đã được định dạng với dấu ',' phân tách các hàng ngàn.
   */
  transform(value: number): string {
    // Kiểm tra nếu giá trị không phải là một số nguyên hợp lệ hoặc là NaN.
    if (isNaN(value) || !Number.isInteger(value)) {
      return ''; // Trả về chuỗi rỗng nếu giá trị không phải số nguyên.
    }

    const stringValue = value.toString(); // Chuyển đổi giá trị thành chuỗi.
    const parts = stringValue.split('.'); // Phân chia thành phần nguyên và phần thập phân (nếu có).
    const integerPart = parts[0]; // Lấy phần nguyên của chuỗi.

    let formattedNumber = ''; // Khởi tạo chuỗi số đã được định dạng.
    let count = 0;

    // Lặp qua từng chữ số từ phải sang trái trong phần nguyên.
    for (let i = integerPart.length - 1; i >= 0; i--) {
      formattedNumber = integerPart[i] + formattedNumber;
      count++;

      // Thêm dấu ',' sau mỗi 3 chữ số, trừ trường hợp ở hàng đơn vị.
      if (count % 3 === 0 && i > 0) {
        formattedNumber = ',' + formattedNumber;
      }
    }

    // Nếu có phần thập phân, thêm nó vào sau phần nguyên đã được định dạng.
    if (parts.length > 1) {
      formattedNumber += '.' + parts[1];
    }

    return formattedNumber; // Trả về chuỗi số đã được định dạng.
  }
}
