import { INPUT_BUDGET, CLEAR_INPUT } from '../constants';

const inititalState = '0';

const inputBudgetReducer = (state = inititalState, action) => {
  switch (action.type) {
    case INPUT_BUDGET:
      return action.payload;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
};

export default inputBudgetReducer;
