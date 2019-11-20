import {
  INPUT_BUDGET,
  INPUT_EXP_NAME,
  INPUT_EXP_AMOUNT,
  CLEAR_INPUT,
} from '../constants';

export const inputBudget = event => ({
  type: INPUT_BUDGET,
  payload: event.target.value,
});

export const inputExpensesName = event => ({
  type: INPUT_EXP_NAME,
  payload: event.target.value,
});

export const inputExpensesAmount = event => ({
  type: INPUT_EXP_AMOUNT,
  payload: event.target.value,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
  payload: '',
});
