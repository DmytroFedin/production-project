import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClas')).toBe('someClas');
  });

  test('with additional class', () => {
    const expected = 'someClas cls1 cls2';
    expect(classNames('someClas', {}, ['cls1', 'cls2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClas cls1 cls2 hovered scrollable';
    expect(classNames(
      'someClas',
      { hovered: true, scrollable: true },
      ['cls1', 'cls2'],
    ))
      .toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClas cls1 cls2 hovered';
    expect(classNames(
      'someClas',
      { hovered: true, scrollable: false },
      ['cls1', 'cls2'],
    ))
      .toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClas cls1 cls2 hovered';
    expect(classNames(
      'someClas',
      { hovered: true, scrollable: undefined },
      ['cls1', 'cls2'],
    ))
      .toBe(expected);
  });
});
