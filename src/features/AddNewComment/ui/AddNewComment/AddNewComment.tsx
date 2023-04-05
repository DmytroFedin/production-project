import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getNewCommentError, getNewCommentText } from '../../model/selectors/getNewComment';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slice/addNewCommentSlice';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddNewComment = (({ className, onSendComment }: AddNewCommentProps) => {
  const { t } = useTranslation();
  const text = useSelector(getNewCommentText);
  const error = useSelector(getNewCommentError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value));
  }, [dispatch]);

  const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
  };

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddNewComment, {}, [className])}>
        <Input
          className={cls.input}
          value={text}
          onChange={onCommentTextChange}
          title={t('Add_comment_title')}
        />
        <Button onClick={onSendHandler}>{t('Send_btn')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddNewComment;
