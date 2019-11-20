import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stat from './Stat/Stat';
import {
  getBudgetValue,
  getExpensesValue,
} from '../../redux/selectors/selectors';
import calculateBalance from '../../helpers/calculateBalance';

import Container from './Values.styles';

const Values = ({ budget, expenses }) => {
  const balance = calculateBalance(budget, expenses);

  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={expenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  budget: getBudgetValue(state),
  expenses: getExpensesValue(state),
});

export default connect(mapStateToProps, null)(Values);
