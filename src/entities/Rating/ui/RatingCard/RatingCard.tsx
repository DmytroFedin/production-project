import { useTranslation } from 'react-i18next';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(({
  className, feedbackTitle, hasFeedback, onAccept, onCancel, title, rate = -3,
}: RatingCardProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const [mobileView, setMobileView] = useState<boolean>(false);
  const detectDevice = () => {
    const isMobile = window.matchMedia;
    if (!isMobile) return false;

    const device = isMobile('(pointer:coarse)');
    return device.matches;
  };

  useEffect(() => {
    const isMobile = detectDevice();
    setMobileView(isMobile);
  }, []);

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const onAcceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const onCancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap="30">
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} title={t('Leave_review')} />
      <HStack max justify="between">
        <Button ariaLabel="Send with feedback button" onClick={onAcceptHandler}>
          {t('Send_btn')}
        </Button>
        <Button ariaLabel="Send without feedback button" onClick={onCancelHandler} theme={ButtonTheme.OUTLINED_RED}>
          {t('Close_btn')}
        </Button>
      </HStack>
    </VStack>
  );
  return (
    <Card max className={classNames(cls.Rating, {}, [className])}>
      <VStack max gap="5" align="center">
        <Text title={starsCount > 0 ? t('Review_thanks_title') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {isModalOpen && (
        mobileView
          ? (
            <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
              {modalContent}
            </Drawer>
          )
          : (
            <Modal isOpen={isModalOpen}>
              {modalContent}
            </Modal>
          )
      )}
    </Card>
  );
});
