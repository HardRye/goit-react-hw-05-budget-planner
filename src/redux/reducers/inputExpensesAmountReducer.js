import { INPUT_EXP_AMOUNT, CLEAR_INPUT } from '../constants';

const inititalState = '0';

const inputExpensesNameReducer = (state = inititalState, action) => {
  switch (action.type) {
    case INPUT_EXP_AMOUNT:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default inputExpensesNameReducer;
