import { classNames } from 'shared/lib/helpers/classNames';
import cls from './LangSwitcher.module.scss';
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = (
	{
		className
	}: LangSwitcherProps) => {

	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return (
		<Button
			theme={ ThemeButton.CLEAR }
			className={ classNames(cls.langSwitcher, {}, [className]) }
			onClick={ toggle }
		>
			{ t('Язык') }
		</Button>
	);
};

export default LangSwitcher;