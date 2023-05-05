import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './User.module.scss';

interface UserProps {
  className?: string;
}

export const User: FC<UserProps> = (
  {
    className,
  },
) => {
  return (
    <div className={ classNames(cls.user, {}, [className]) }>
      user
    </div>
  );
};

export default User;
