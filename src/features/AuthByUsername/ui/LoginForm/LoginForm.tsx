import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState';

interface LoginFormProps {
  className?: string;
  isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginclick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
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
  );
});
