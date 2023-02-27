import { getLoginIsDone } from 'features/AuthByUsername/model/selectors/getLoginIsDone/getLoginIsDone';
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean,
  onClose: () => void,
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const isDone = useSelector(getLoginIsDone);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDone={isDone}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync isOpen={isOpen} />
      </Suspense>
    </Modal>
  );
};
