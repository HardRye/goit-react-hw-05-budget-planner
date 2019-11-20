import { SET_BUDGET } from '../constants';

const setBudget = value => ({
  type: SET_BUDGET,
  payload: value,
});

export default setBudget;
