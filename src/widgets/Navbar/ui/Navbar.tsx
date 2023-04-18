import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
	className?: string;
}

export const Navbar = (
	{
		className
	}: NavbarProps) => {
	return (
		<div className={ classNames(cls.navbar, {}, [className]) }>
			<div className={ classNames(cls.linksWrapper) }>
				<AppLink to={ '/' } theme={ AppLinkTheme.SECONDARY }>Main</AppLink>
				<AppLink to={ '/about' } theme={ AppLinkTheme.SECONDARY }>About site</AppLink>
			</div>
		</div>
	);
};

export default Navbar;
