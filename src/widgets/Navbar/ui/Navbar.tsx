import { classNames } from 'shared/lib/helpers/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal';
import React, { useCallback, useState } from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = (
  {
    className,
  }: NavbarProps,
) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const toggleAuthModal = useCallback((isOpen: boolean) => {
    setIsOpenAuthModal(isOpen);
  }, []);

  return (
    <div className={ classNames(cls.navbar, {}, [className]) }>
      <div className={ classNames(cls.linksWrapper) }>
        <AppLink to="/" theme={ AppLinkTheme.SECONDARY }>Main</AppLink>
        <AppLink to="/about" theme={ AppLinkTheme.SECONDARY }>About site</AppLink>

        <Button
          theme={ ThemeButton.OUTLINE }
          onClick={ () => toggleAuthModal(true) }
          className={ cls.btnAuth }
        >
          Войти
        </Button>
        <Modal
          isOpen={ isOpenAuthModal }
          onClose={ () => toggleAuthModal(false) }
        >
          Некоторый текст
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
