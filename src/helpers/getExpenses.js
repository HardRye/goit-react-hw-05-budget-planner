const getExpenses = expensesArr => {
  if (expensesArr.length > 0) {
    return expensesArr.reduce((acc, el) => acc + el.amount, 0);
  }
  return 0;
};

export default getExpenses;
