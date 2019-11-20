import getExpenses from '../../helpers/getExpenses';

export const getInputBudgetValue = state => state.inputBudgetValue;
export const getBudgetValue = state => state.budget;

export const getInputExpenseName = state => state.inputExpensesName;
export const getInputExpenseAmount = state => state.inputExpensesAmount;

export const getExpensesArr = state => state.expenses;
export const getExpensesValue = state => getExpenses(state.expenses);
