import { SET_BUDGET } from '../constants';

const initialState = 0;

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUDGET:
      return action.payload;

    default:
      return state;
  }
};

export default budgetReducer;
