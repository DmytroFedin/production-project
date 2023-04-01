import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { ArticleDetailsCommentsActions, ArticleDetailsCommentsReducer } from './ArticleDetailsCommentSlice';

const data = {
  id: '1',
  user: {
    id: '1',
    username: 'Vasya',
  },
  text: 'hello world',
};
const result = {
  entities: {
    1: {
      id: '1',
      user: {
        id: '1',
        username: 'Vasya',
      },
      text: 'hello world',
    },
  },
  ids: ['1'],
};

describe('ArticleDetailsCommentSlice.test', () => {
  test('test addOne', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      ids: [],
      entities: {},
    };
    expect(ArticleDetailsCommentsReducer(
    state as ArticleDetailsCommentSchema,
    ArticleDetailsCommentsActions.addOne(data),
    )).toEqual(result);
  });
});
