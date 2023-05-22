import React, {
  FC, FormEvent, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { getUserAuthData } from 'entities/User';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
  onClose?: () => void;
}

export const LoginForm: FC<LoginFormProps> = memo((
  {
    className,
    onClose,
  }: LoginFormProps,
) => {
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const user = useSelector(getUserAuthData);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  useEffect(() => {
    if (user) onClose();
  }, [onClose, user]);

  return (
    <form
      className={ classNames(cls.loginForm, {}, [className]) }
      onSubmit={ onLoginSubmit }
    >
      <Text title="Форма авторизации" />
      { error && (
        <Text
          text="Вы ввели неверный логин или пароль"
          theme={ TextTheme.ERROR }
        />
      )}
      <Input
        type="text"
        name="username"
        placeholder="Введите имя"
        autofocus
        className={ cls.input }
        value={ username }
        onChange={ onChangeUsername }
      />
      <Input
        type="text"
        name="password"
        placeholder="Введите пароль"
        className={ cls.input }
        value={ password }
        onChange={ onChangePassword }
      />
      <Button
        className={ cls.loginBtn }
        type="submit"
        disabled={ isLoading }
      >
        Войти
      </Button>
    </form>
  );
});

export default LoginForm;
