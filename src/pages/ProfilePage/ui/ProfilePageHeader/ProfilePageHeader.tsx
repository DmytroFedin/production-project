import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('ProfilePage_header')} />
      {readonly
        ? (
          <Button theme={ButtonTheme.OUTLINED} className={cls.editBtn} onClick={onEdit}>
            {t('Edit_btn')}
          </Button>
        )
        : (
          <div className={cls.editBtn}>
            <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancel}>
              {t('Cancel_btn')}
            </Button>
            <Button theme={ButtonTheme.OUTLINED} onClick={onSave}>
              {t('Save_btn')}
            </Button>
          </div>
        )}
    </div>
  );
};
