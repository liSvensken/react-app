import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './LoaderSpinner.module.scss';

interface LoaderSpinnerProps {
	className?: string;
	size?: number;
	widthLine?: number;
	heightLine?: number;
	borderLinePercent?: number;
}

export const LoaderSpinner: FC<LoaderSpinnerProps> = (
  {
    className,
    size = 80,
    widthLine = 6,
    heightLine = 18,
    borderLinePercent = 20,
  },
) => {
  const loaderItems = new Array(12).fill(null);

  const getStylesWrapper = useMemo(() => ({
    height: `${size}px`,
    width: `${size}px`,
  }), [size]);

  const getStylesItem = useMemo(() => ({
    transformOrigin: `${size / 2}px ${size / 2}px`,
  }), [size]);

  const getStylesItemChild = useMemo(() => ({
    left: `${size / 2.16}px`,
    width: `${widthLine}px`,
    height: `${heightLine}px`,
    borderRadius: `${borderLinePercent}%`,
  }), [size, widthLine, heightLine, borderLinePercent]);

  return (
    <div
      className={ classNames(cls.loaderSpinner, {}, [className]) }
      style={ getStylesWrapper }
    >
      {
        loaderItems.map((_, index) => (
          <div
            key={ index }
            className={ classNames(cls.loaderItem) }
            style={ getStylesItem }
          >
            <div
              className={ classNames(cls.loaderItemChild) }
              style={ getStylesItemChild }
            />
          </div>
        ))
      }
    </div>
  );
};

export default LoaderSpinner;
