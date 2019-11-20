import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputBudget, clearInput } from '../../redux/actions/inputActions';
import setBudget from '../../redux/actions/budgetActions';
import { getInputBudgetValue } from '../../redux/selectors/selectors';

import Form from '../shared/Form/Form';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import Notification from '../Notification/Notification';

import labelStyles from './BudgetForm.styles';

class BudgetForm extends PureComponent {
  static propTypes = {
    input: PropTypes.string.isRequired,
    clearInput: PropTypes.func.isRequired,
    setBudget: PropTypes.func.isRequired,
    inputBudget: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();

    const { input, clearInput, setBudget } = this.props;

    if (input.length > 0 && Number(input) > 0) {
      setBudget(Number(input));
      clearInput();
    }
  };

  render() {
    const { input, inputBudget } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={input} onChange={inputBudget} />
          {Number(input) < 0 && <Notification text="Should be positive" />}
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  input: getInputBudgetValue(state),
});

const mapDispatchToProps = {
  inputBudget,
  clearInput,
  setBudget,
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
