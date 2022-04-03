import calculate from '../src/calculate';

describe('common tests', () => {
  it('should return number', () => {
    expect(typeof calculate('1 + 0')).toBe('number');
  });
});

describe('+,-', () => {
  it('3 + 4 should return 7', () => {
    expect(calculate('3 + 4')).toBe(7);
  });
  it('3 - 4 should return -1', () => {
    expect(calculate('3 - 4')).toBe(-1);
  });
  it('3 + 4 - 7 should return 0', () => {
    expect(calculate('3 + 4 - 7')).toBe(0);
  });
  it('22 - 2 should return 20', () => {
    expect(calculate('22 - 2')).toBe(20);
  });

});

describe('*,/', () => {
  it('3 * 4 should return 12', () => {
    expect(calculate('3 * 4')).toBe(12);
  });
  it('-3 * 4 should return -12', () => {
    expect(calculate('-3 * 4')).toBe(-12);
  });
  it('6 / 3 should return 2', () => {
    expect(calculate('6 / 3')).toBe(2);
  });
  
  it('0 * 3 should return 0', () => {
    expect(calculate('0 * 3')).toBe(0);
  });
});

describe('^', () => {
  it('3 ^ 3 should return 27', () => {
    expect(calculate('3 ^ 3')).toBe(27);
  });
  it('2 ^ 4 should return 16', () => {
    expect(calculate('2 ^ 4')).toBe(16);
  });
});

describe('all operations', () => {
  it('3 * 4 + 1 should return 13', () => {
    expect(calculate('3 * 4 + 1')).toBe(13);
  });
  it('- 3  * 4 - 2 ^ 3 should return -20', () => {
    expect(calculate('-3 * 4 - 2 ^ 3')).toBe(-20);
  });
  it('9 / 3 ^ 2 + 5 * 2 should return 11', () => {
    expect(calculate('9 / 3 ^ 2 + 5 * 2')).toBe(11);
  });
});

describe('all operations && brackets', () => {
  it('3 * 2 + 2 * ( 6 - 4 + 1 ) should return 12', () => {
    expect(calculate('3 * 2 + 2 * ( 6 - 4 + 1 )')).toBe(12);
  });
  it('-3 * 4 - ( 2 * 6 / ( 1 + 5 ) ) should return -14', () => {
    expect(calculate('-3 * 4 - ( 2 * 6 / ( 1 + 5 ) )')).toBe(-14);
  });
});

describe('validation input data', () => {
  it('is expected "Count of close brackets should be the same count of open brackets"', () => {
    expect(() => calculate('3 * 2 + 2 * ( 6 - ( 4 + 1 )')).toThrow('Count of close brackets should be the same count of open brackets');
  });
  it('is expected "Should use spaces between input elements"', () => {
    expect(() => calculate('3 * 2 + 2 * (6 - 4 + 1)')).toThrow('Should use spaces between input elements');
  });
  it('is expected "Invalid input data" #1', () => {
    expect(() => calculate('3 $ 4')).toThrow('Invalid input data');
  });

});
