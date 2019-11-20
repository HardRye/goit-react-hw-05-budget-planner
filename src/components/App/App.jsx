import React from 'react';
import BudgetForm from '../BudgetForm/BudgetForm';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
import Values from '../Values/Values';

import Container from './App.styles';

const App = () => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    <ExpensesTable />
  </Container>
);

export default App;
