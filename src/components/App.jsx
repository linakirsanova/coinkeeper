import React from 'react';
import IncomesContainer from '../containers/Incomes';
import AccountsContainer from '../containers/Accounts';
import ExpensesContainer from '../containers/Expenses';

export default () => (
  <div>
    <IncomesContainer />
    <AccountsContainer />
    <ExpensesContainer />
  </div>
);