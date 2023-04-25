import { StateSchema } from '@/app/providers/StoreProvider';
import { getNewCommentError, getNewCommentText } from './getNewComment';

describe('getNewComment.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: 'error',
      },
    };
    expect(getNewCommentError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getNewCommentError(state as StateSchema)).toEqual(undefined);
  });

  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: 'text',
      },
    };
    expect(getNewCommentText(state as StateSchema)).toEqual('text');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getNewCommentText(state as StateSchema)).toEqual('');
  });
});
