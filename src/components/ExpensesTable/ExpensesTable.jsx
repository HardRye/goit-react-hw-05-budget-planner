import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../shared/Button/Button';

import { deleteExpenses } from '../../redux/actions/expensesActions';
import { getExpensesArr } from '../../redux/selectors/selectors';

import Table from './ExpensesTable.styles';

const ExpensesTable = ({ items, onRemove }) => (
  <>
    {items.length > 0 && (
      <Table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button label="Delete" onClick={() => onRemove(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </>
);

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getExpensesArr(state),
});

const mapDispatchToProps = {
  onRemove: deleteExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
