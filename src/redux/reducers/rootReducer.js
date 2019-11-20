import { combineReducers } from 'redux';

import inputBudgetReducer from './inputBudgetReducer';
import budgetReducer from './budgetReducer';
import inputExpensesNameReducer from './inputExpensesNameReducer';
import inputExpensesAmountReducer from './inputExpensesAmountReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  inputBudgetValue: inputBudgetReducer,
  inputExpensesName: inputExpensesNameReducer,
  inputExpensesAmount: inputExpensesAmountReducer,
  budget: budgetReducer,
  expenses: expensesReducer,
});

export default rootReducer;
