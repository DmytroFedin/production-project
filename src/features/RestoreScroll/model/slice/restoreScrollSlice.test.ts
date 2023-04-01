import { ScrollSchema } from '../types/RestoreScrollSchema';
import { restoreScrollActions, restoreScrollReducer } from './restoreScrollSlice';

describe('restoreScrollSlice.test', () => {
  test('test setScrollPosition', () => {
    const state: DeepPartial<ScrollSchema> = {
      scroll: {},
    };
    const testValue = {
      path: '/articles',
      position: 526,
    };
    const scroll = { scroll: { '/articles': 526 } };
    expect(restoreScrollReducer(
    state as ScrollSchema,
    restoreScrollActions.setScrollPosition(testValue),
    )).toEqual(scroll);
  });
});
