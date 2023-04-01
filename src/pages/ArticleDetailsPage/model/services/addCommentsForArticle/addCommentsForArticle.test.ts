import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentsForArticle } from './addCommentsForArticle';

const data = { articleId: '1', userId: '1', text: 'test 1' };
describe('addCommentsForArticle.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(addCommentsForArticle, {
      user: {
        authData: {
          id: '1',
          avatar: '',
          username: 'admin',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('test 1');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(addCommentsForArticle, {
      user: {
        authData: {
          id: '1',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('test 1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
