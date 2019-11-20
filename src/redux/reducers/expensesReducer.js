import { ADD_EXPENCES, DELETE_EXPENCES } from '../constants';

const inititalState = [];

const expensesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_EXPENCES:
      return [...state, action.payload];
    case DELETE_EXPENCES:
      return state.filter(el => el.id !== action.payload);

    default:
      return state;
  }
};

export default expensesReducer;
