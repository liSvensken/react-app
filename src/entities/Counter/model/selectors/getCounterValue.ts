import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from './getCounter';

// для "мемоизации" переиспользуем селектор getCounter при помощи createSelector
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
