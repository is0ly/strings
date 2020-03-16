import reverse from './reverse';

const warning = 'No valid arguments given!';

test('Корректно делает реверс строки', () => {
  expect(reverse('Biography')).toBe('yhpargoib');
});
test('Корректно обрабатывывет вызов без аргументов', () => {
  expect(reverse()).toBe(warning);
});
test('Корректно обрабатывывет вызов без с аргументом числом', () => {
  expect(reverse(23)).toBe(warning);
});

test('Корректно обрабатывывет вызов с экзотическими аргументами', () => {
  expect(reverse([])).toBe(warning);
});
