import { ADD_EXPENCES, DELETE_EXPENCES } from '../constants';

export const addExpenses = obj => ({
  type: ADD_EXPENCES,
  payload: obj,
});

export const deleteExpenses = id => ({
  type: DELETE_EXPENCES,
  payload: id,
});
