import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  accounts: [
    { name: 'Wallet', sum: 10000, type: 'accounts' },
    { name: 'Bank Account', sum: 12340, type: 'accounts' },
  ],
  expenses: [
    { name: 'Restaurants', sum: 0, type: 'expenses' },
    { name: 'Groceries', sum: 0, type: 'expenses' },
    { name: 'Transport', sum: 0, type: 'expenses' },
    { name: 'Cinema', sum: 0, type: 'expenses' },
  ],
  incomes: [
    { name: 'Upwork', sum: 0, type: 'expenses' },
    { name: 'Deposit', sum: 0, type: 'expenses' },
  ],
  balance: [
    { name: 'Current balance', sum: 0 },
    { name: 'Expenses this month', sum: 0 }
  ],
  transfers: [
    { from: "Upwork", fromType: "incomes", to: "Wallet", toType: "accounts", date: "March 22nd 2018", sum: "12000", time: "20:45" },
    { from: "Deposit", fromType: "incomes", to: "Bank Account", toType: "accounts", date: "March 21nd 2018", sum: "6000", time: "20:41" },
    {from: "Wallet", fromType: "accounts", to: "Restaurants", toType: "expenses", date: "March 20th 2018", sum: "2500", time: "19:21" },
    {from: "Bank Account", fromType: "accounts", to: "Groceries", toType: "expenses", date: "March 18th 2018", sum: "4600", time: "10:48" },
  ],
};

const elements = handleActions({
  [actions.createElement](state, { payload: { type, name, sum } }) {
    const newPieceOfState = [...state[type], { name, sum, type }];
    return { ...state, [type]: newPieceOfState}
  },
  [actions.addTransfer](state, { payload: operation }) {
    const { toType, fromType } = operation;
    const plusState = state[toType].map(({name, sum}) => 
      name === operation.to ? { name, sum: sum + Number(operation.sum)} : { name, sum });
    const minusState = state[fromType].map(({name, sum}) => {
      if (name === operation.from) {
        return fromType === 'incomes' ? { name, sum: sum + Number(operation.sum)} :
       { name, sum: sum - Number(operation.sum)};
      }
      return { name, sum };
    });
    return {...state, [fromType]: minusState, [toType]: plusState, transfers: [...state.transfers, operation] };    
  },
  [actions.changeBalance](state) {
    const newBalance = state.balance.map(el => el.name === 'Current balance' ? 
    { name: el.name, sum: state.accounts.reduce((acc, el) =>  acc + el.sum, 0) } : 
    { name: el.name, sum: state.expenses.reduce((acc, el) =>  acc + el.sum, 0) });
    return {...state, balance: newBalance };
  },
}, initialState);

const newOperation = handleActions({
  [actions.createOperation](state, {payload: info}) {
    return {...state, ...info};
  },
}, {});

const newElement = handleActions({
  [actions.createNewElement](state, {payload: info}) {
    return {...state, ...info};
  },
}, {});

const showModal = handleActions({
  [actions.showModal](state) {
    return !state;
  }
}, false);

const showNewElementModal = handleActions({
  [actions.showNewElementModal](state) {
    return !state;
  }
}, false);

const showTransferHistory = handleActions({
  [actions.showTransferHistory](state) {
    return !state;
  }
}, false);

export default combineReducers({
  showModal,
  showNewElementModal,
  showTransferHistory,
  newOperation,
  newElement,
  elements,
});