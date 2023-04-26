import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { LoaderSpinner } from 'shared/ui/LoaderSpinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (
  {
    className,
  },
) => {
  return (
    <div className={ classNames(cls.pageLoader, {}, [className]) }>
      <LoaderSpinner size={ 100 } heightLine={ 24 } />
    </div>
  );
};

export default PageLoader;
