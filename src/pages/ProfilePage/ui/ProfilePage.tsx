import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<string>();

  if (!id) {
    return <Text text={t('Profile_error')} theme={TextTheme.ERROR} />;
  }

  return (
    <Page data-testid="ProfilePage">
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
