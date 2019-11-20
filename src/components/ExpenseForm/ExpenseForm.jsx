import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addExpenses } from '../../redux/actions/expensesActions';
import {
  inputExpensesName,
  inputExpensesAmount,
  clearInput,
} from '../../redux/actions/inputActions';
import {
  getInputExpenseName,
  getInputExpenseAmount,
} from '../../redux/selectors/selectors';

import Form from '../shared/Form/Form';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import Notification from '../Notification/Notification';

import labelStyles from './ExpenseForm.styles';

class ExpenseForm extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    inputExpensesName: PropTypes.func.isRequired,
    inputExpensesAmount: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    addExpenses: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount, clearInput, addExpenses } = this.props;

    if (name.length > 0 && Number(amount) > 0) {
      const expense = {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      };

      addExpenses(expense);
      clearInput();
    }
  };

  render() {
    const { name, amount, inputExpensesName, inputExpensesAmount } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
            value={name}
            onChange={inputExpensesName}
          />
          {name.length === 0 && <Notification text="Should not be empty" />}
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            // value={this.state.amount}
            // onChange={this.handleChange}
            value={amount}
            onChange={inputExpensesAmount}
          />
          {Number(amount) < 0 && <Notification text="Should be positive" />}
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  name: getInputExpenseName(state),
  amount: getInputExpenseAmount(state),
});

const mapDispatchToProps = {
  inputExpensesName,
  inputExpensesAmount,
  clearInput,
  addExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
