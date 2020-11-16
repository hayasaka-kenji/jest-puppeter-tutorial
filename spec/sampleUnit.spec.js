const sum = require('../src/sample');

test('サンプルの足し算が正常に計算されている。', () => {
  expect(sum(1, 2)).toBe(3);
});