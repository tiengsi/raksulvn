import { DayOfWeekPipe } from './day-of-week.pipe';

describe('DayOfWeekPipe', () => {
  let pipe: DayOfWeekPipe;

  beforeEach(() => {
    pipe = new DayOfWeekPipe();
  });

  it('should transform 1 to Mon', () => {
    const result = pipe.transform(1);
    expect(result).toBe('Mon');
  });

  it('should transform 2 to Tue', () => {
    const result = pipe.transform(2);
    expect(result).toBe('Tue');
  });

  it('should transform 3 to Wed', () => {
    const result = pipe.transform(3);
    expect(result).toBe('Wed');
  });

  it('should transform 4 to Thu', () => {
    const result = pipe.transform(4);
    expect(result).toBe('Thu');
  });

  it('should transform 5 to Fri', () => {
    const result = pipe.transform(5);
    expect(result).toBe('Fri');
  });

  it('should transform unknown value to empty string', () => {
    const result = pipe.transform(6); // 6 is an unknown value
    expect(result).toBe('');
  });
});
