import { classNames } from 'shared/lib/helpers/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { useCallback, useState } from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, getUserAuthData } from 'entities/User';
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
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const toggleAuthModal = useCallback((isOpen: boolean) => {
    setIsOpenAuthModal(isOpen);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={ classNames(cls.navbar, {}, [className]) }>
      <div className={ classNames(cls.linksWrapper) }>
        <AppLink to="/" theme={ AppLinkTheme.SECONDARY }>Main</AppLink>
        <AppLink to="/about" theme={ AppLinkTheme.SECONDARY }>About site</AppLink>
        {
          authData?.id ? (
            <Button
              theme={ ThemeButton.OUTLINE }
              onClick={ () => onLogout() }
              className={ cls.btnAuth }
            >
              Выйти
            </Button>
          ) : (
            <Button
              theme={ ThemeButton.OUTLINE }
              onClick={ () => toggleAuthModal(true) }
              className={ cls.btnAuth }
            >
              Войти
            </Button>
          )
        }

        <LoginModal
          isOpen={ isOpenAuthModal }
          onClose={ () => toggleAuthModal(false) }
        />
      </div>
    </div>
  );
};

export default Navbar;
