import { classNames } from 'shared/lib/helpers/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = (
  {
    className,
  }: NavbarProps,
) => (
  <div className={ classNames(cls.navbar, {}, [className]) }>
    <div className={ classNames(cls.linksWrapper) }>
      <AppLink to="/" theme={ AppLinkTheme.SECONDARY }>Main</AppLink>
      <AppLink to="/about" theme={ AppLinkTheme.SECONDARY }>About site</AppLink>
    </div>
  </div>
);

export default Navbar;
