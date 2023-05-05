import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export default function createReduxStore(initialState?: StateSchema) {
  // тут нужно "регистрировать" все редьюсеры (сторы)
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
