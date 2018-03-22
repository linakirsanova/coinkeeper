import React from 'react';
import IncomesContainer from '../containers/Incomes';
import AccountsContainer from '../containers/Accounts';
import ExpensesContainer from '../containers/Expenses';
import ModalContainer from '../containers/Modal';
import NewElementContainer from '../containers/NewElementModal';
import BalanceContainer from '../containers/Balance';
import TransferHistoryModalContainer from '../containers/TransferHistoryModal';

export default () => (
  <React.Fragment>
    <BalanceContainer />
    <IncomesContainer />
    <AccountsContainer />
    <ExpensesContainer />
    <ModalContainer />
    <NewElementContainer />
    <TransferHistoryModalContainer />
  </React.Fragment>
);