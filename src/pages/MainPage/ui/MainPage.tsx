import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import cls from './MainPage.module.scss';

interface MainPageProps {
	className?: string;
}

export const MainPage: FC<MainPageProps> = (
  {
    className,
  },
) => {
  const { t } = useTranslation('main-page');
  return (
    <div className={ classNames(cls.mainPage, {}, [className]) }>
      { t('Главный заголовок') }

      <div>
        <h2>Счётчик:</h2>
        <Counter />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <BugButton />
      </div>
    </div>
  );
};

export default MainPage;
