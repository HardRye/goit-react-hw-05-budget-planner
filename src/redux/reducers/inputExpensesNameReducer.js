import { INPUT_EXP_NAME, CLEAR_INPUT } from '../constants';

const inititalState = '';

const inputExpensesNameReducer = (state = inititalState, action) => {
  switch (action.type) {
    case INPUT_EXP_NAME:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default inputExpensesNameReducer;
