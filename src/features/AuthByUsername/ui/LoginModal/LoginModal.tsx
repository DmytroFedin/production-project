import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean,
  onClose: () => void,
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync isOpen={isOpen} onSuccess={onClose} />
    </Suspense>
  </Modal>
);
