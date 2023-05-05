import React, {
  FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Input.module.scss';

/*
`Omit` позволяет забрать из типа все пропсы, исключая те,
которые нам не нужны или мы их хотим переопределить ('value' | 'onChange')
*/

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={ classNames(cls.inputWrapper, {}, [className]) }>
      {placeholder && (
        <div className={ cls.placeholder }>
          {`${placeholder}>`}
        </div>
      )}
      <div className={ cls.caretWrapper }>
        <input
          ref={ ref }
          type={ type }
          value={ value }
          onChange={ onChangeHandler }
          className={ cls.input }
          onFocus={ onFocus }
          onBlur={ onBlur }
          onSelect={ onSelect }
          { ...otherProps }
        />
        {isFocused && (
          <span
            className={ cls.caret }
            style={ { left: `${caretPosition * 9}px` } }
          />
        )}
      </div>
    </div>
  );
});

export default Input;
