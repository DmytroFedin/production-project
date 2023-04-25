import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { ArticleDetailsCommentsActions } from '../../slices/ArticleDetailsCommentSlice';

// First, create the thunk
export const addCommentsForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>>(
    'articleDetails/addCommentsForArticle',
    async (text, thunkApi) => {
      const {
        extra, dispatch, rejectWithValue, getState,
      } = thunkApi;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        const newComment: Comment = {
          id: response.data.id,
          text: response.data.text,
          user: userData,
        };

        dispatch(ArticleDetailsCommentsActions.addOne(newComment));

        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    },
  );
