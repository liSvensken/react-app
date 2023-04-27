import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = (
  {
    className,
  },
) => {
  const { t } = useTranslation();

  const onReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={ classNames(cls.pageError, {}, [className]) }>
      <div>{ t('Произошла непредвиденная ошибка') }</div>
      <Button onClick={ onReload }>
        { t('Обновить страницу') }
      </Button>
    </div>
  );
};

export default PageError;
