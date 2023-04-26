import { FC } from 'react';
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

  // todo куда-то это надо вынести
  const getStylesWrapper = () => {
    if (size) {
      return {
        height: `${size}px`,
        width: `${size}px`,
      };
    }
    return null;
  };

  const getStylesItem = () => {
    return {
      transformOrigin: `${size / 2}px ${size / 2}px`,
    };
  };

  const getStylesItemChild = () => {
    return {
      left: `${size / 2.16}px`,
      width: `${widthLine}px`,
      height: `${heightLine}px`,
      borderRadius: `${borderLinePercent}%`,
    };
  };

  return (
    <div
      className={ classNames(cls.loaderSpinner, {}, [className]) }
      style={ getStylesWrapper() }
    >
      {
        loaderItems.map((index) => (
          <div
            key={ index }
            className={ classNames(cls.loaderItem) }
            style={ getStylesItem() }
          >
            <div
              className={ classNames(cls.loaderItemChild) }
              style={ getStylesItemChild() }
            />
          </div>
        ))
      }
    </div>
  );
};

export default LoaderSpinner;
