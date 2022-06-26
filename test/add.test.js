const add = require('./../add.js');

describe('basic test', () => {
    test('it sums integer', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });
    test('it sums big integer', () => {
        const result = add(1000, 2000);
        expect(result).toBe(3000);
    });
    test('it sums negative integer', () => {
        const result = add(-10, 2);
        expect(result).toBe(-8);
    });
    test('it sums 0', () => {
        const ramdom = Math.random();
        const result = add(ramdom, 0);
        expect(result).toBe(ramdom);
    });
});

describe('decimals test', () => {
    test('it sums decimals', () => {
        const result = add(0.1, 0.4);
        expect(result).toBe(0.5);
    });
    test('it sums decimals', () => {
        const result = add(0.1, 0.2);
        expect(result).toBeCloseTo(0.3, 6);
    });
    test('it sums decimals', () => {
        const result = add(0.1, 0.2);
        expect(result).toBeCloseTo(0.3, 6);
    });
    test('it sums decimals', () => {
        const result = add(0.1, -0.2);
        expect(result).toBeCloseTo(-0.1, 6);
    });
});

describe('decimals test', () => {
    test('it sums numbers as strings', () => {
        const result = add('0.1', -0.2);
        expect(result).toBeCloseTo(-0.1, 6);
    });
    test('it returns number NaN', () => {
        const result = add('not a 0.1', -0.2);
        expect(result).toBe(NaN);
    });
});