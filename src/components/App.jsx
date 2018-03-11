import React from 'react';
import IncomesContainer from '../containers/Incomes';
import AccountsContainer from '../containers/Accounts';
import ExpensesContainer from '../containers/Expenses';
import ModalContainer from '../containers/Modal';
import NewElementContainer from '../containers/NewElementModal';

export default () => (
  <React.Fragment>
    <IncomesContainer />
    <AccountsContainer />
    <ExpensesContainer />
    <ModalContainer />
    <NewElementContainer />
  </React.Fragment>
);