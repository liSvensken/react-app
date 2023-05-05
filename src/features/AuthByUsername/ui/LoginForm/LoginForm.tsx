import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (
  {
    className,
  },
) => {
  return (
    <form className={ classNames(cls.loginForm, {}, [className]) }>
      <Input
        type="text"
        name="username"
        placeholder="Введите имя"
        autofocus
        className={ cls.input }
      />
      <Input
        type="text"
        name="password"
        placeholder="Введите пароль"
        className={ cls.input }
      />
      <Button className={ cls.loginBtn }>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
