import { lifeIndicator }  from '../app';

test.each ([
    ['healthy', 85],
    ['wounded',50],
    ['wounded', 20],
    ['wounded', 15],
    ['critical', 10],
])('should specify  %s level with %i amount',
(expected, amount) => {
    const result = lifeIndicator(amount);
    expect(result).toBe(expected);
});