import calculate from '../src/calculate';
import { showError } from '../src/handleInputOutput';

describe('+ && -', () => {
  it('should return number', () => {
    expect(typeof calculate('1 + 0')).toBe('number');
  });
  it('should return 7', () => {
    expect(calculate('3 + 4')).toBe(7);
  });
  it('should return -1', () => {
    expect(calculate('3 - 4')).toBe(-1);
  });
  it('should return 0', () => {
    expect(calculate('3 + 4 - 7')).toBe(0);
  });
});

describe('* && /', () => {
  it('should return 12', () => {
    expect(calculate('3 * 4')).toBe(12);
  });
  it('should return -12', () => {
    expect(calculate('-3 * 4')).toBe(-12);
  });
  it('should return 2', () => {
    expect(calculate('6 / 3')).toBe(2);
  });
  
  it('should return 0', () => {
    expect(calculate('0 * 3')).toBe(0);
  });
});

describe('all operations', () => {
  it('should return 13', () => {
    expect(calculate('3 * 4 + 1')).toBe(13);
  });
  it('should return -14', () => {
    expect(calculate('-3 * 4 - 2')).toBe(-14);
  });
  it('should return 12', () => {
    expect(calculate('6 / 3 + 5 * 2')).toBe(12);
  });
});

describe('all operations && brackets', () => {
  it('should return 12', () => {
    expect(calculate('3 * 2 + 2 * ( 6 - 4 + 1 )')).toBe(12);
  });
  it('should return -14', () => {
    expect(calculate('-3 * 4 - ( 2 * 6 / ( 1 + 5 ) )')).toBe(-14);
  });
});

describe('validation input data', () => {
  it('console.log the text "Count of close brackets should be the same count of open brackets"', () => {
    expect(() => calculate('3 * 2 + 2 * ( 6 - ( 4 + 1 )')).toThrow('Count of close brackets should be the same count of open brackets');
  });
  it('console.log the text "Should use spaces between input elements"', () => {
    expect(() => calculate('3 * 2 + 2 * (6 - 4 + 1)')).toThrow('Should use spaces between input elements');
  });
});