import { FormatNumberPipe } from './format-number.pipe';

describe('FormatNumberPipe', () => {
  let pipe: FormatNumberPipe;

  beforeEach(() => {
    pipe = new FormatNumberPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format a number with commas', () => {
    expect(pipe.transform(1000)).toBe('1,000');
    expect(pipe.transform(1000000)).toBe('1,000,000');
    expect(pipe.transform(1234567.89)).toBe('1,234,567.89');
  });

  it('should return an empty string for invalid input', () => {
    expect(pipe.transform(NaN)).toBe('');
    expect(pipe.transform('abc')).toBe('');
    expect(pipe.transform(123.45)).toBe('');
  });
});
