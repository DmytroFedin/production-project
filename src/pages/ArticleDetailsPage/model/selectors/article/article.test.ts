import { StateSchema } from '@/app/providers/StoreProvider';
import { canEditArticle } from './article';

describe('article.test', () => {
  test('should return canEditArticle - true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '1',
          user: {
            id: '1',
          },
        },
      },
      user: {
        authData: {
          id: '1',
        },
      },
    };
    expect(canEditArticle(state as StateSchema)).toEqual(true);
  });
  test('should return canEditArticle - false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '1',
          user: {
            id: '1',
          },
        },
      },
      user: {
        authData: {
          id: '2',
        },
      },
    };
    expect(canEditArticle(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
      },
      user: {
      },
    };
    expect(canEditArticle(state as StateSchema)).toEqual(false);
  });
});
