import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('ProfilePage_header')} />
      { canEdit && (
        <div>
          {readonly
            ? (
              <Button data-testid="EditableProfileCardHeader.EditBtn" theme={ButtonTheme.OUTLINED} onClick={onEdit}>
                {t('Edit_btn')}
              </Button>
            )
            : (
              <HStack gap="10">
                <Button
                  data-testid="EditableProfileCardHeader.CancelBtn"
                  theme={ButtonTheme.OUTLINED_RED}
                  onClick={onCancel}
                >
                  {t('Cancel_btn')}
                </Button>
                <Button data-testid="EditableProfileCardHeader.SaveBtn" theme={ButtonTheme.OUTLINED} onClick={onSave}>
                  {t('Save_btn')}
                </Button>
              </HStack>
            )}
        </div>
      )}
    </HStack>
  );
});
