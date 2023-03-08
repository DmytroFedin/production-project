import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, isOpen, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginclick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Authorisation_header')} />
        {error && <Text text={t('LoginError')} theme={TextTheme.ERROR} />}
        <Input
          className={cls.input}
          type="text"
          title={t('login_input')}
          isOpen={isOpen}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cls.input}
          type="text"
          title={t('password_input')}
          onChange={onChangePassword}
          value={password}
        />
        <Button disabled={isLoading} className={cls.btn} theme={ButtonTheme.OUTLINED} onClick={onLoginclick}>
          {t('LogInBtn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
