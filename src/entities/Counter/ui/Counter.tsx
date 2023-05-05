import { FC } from 'react';
import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  // getCounterValue вынесли в отдельный файл для структурированности
  // было: (state: StateSchema) => state.counter.value
  const counterValue = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>
        value =
        {' '}
        { counterValue }
      </h1>
      <Button onClick={ onIncrement }>
        increment
      </Button>
      <Button onClick={ onDecrement }>
        decrement
      </Button>
    </div>
  );
};

export default Counter;
