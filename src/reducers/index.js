import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialAcconts = [
  { name: 'Wallet', sum: 0 },
  { name: 'Bank Account', sum: 0 },
];

const initialExpenses = [
  { name: 'Restaurants', sum: 0 },
  { name: 'Groceries', sum: 0 },
  { name: 'Transport', sum: 0 },
  { name: 'Cinema', sum: 0 },
];

const initialIncomes = [
  { name: 'Upwork', sum: 0 },
  { name: 'Deposit', sum: 0 },
];

const incomes = handleActions({
  [actions.createIncome](state, { payload: { name, sum } }) {
    return [ ...state, { name, sum } ]
  },
}, initialIncomes);

const expenses = handleActions({
  [actions.createExpense](state, { payload: { name, sum } }) {
    return [ ...state, { name, sum } ]
  },
}, initialExpenses);

const accounts = handleActions({
  [actions.createExpense](state, { payload: { name, sum } }) {
    return [ ...state, { name, sum } ]
  },
}, initialAcconts);

const transfers = handleActions({
  [actions.addOperation](state, { payload: operation }) {
    console.log(state);
    return [ ...state, operation]
  },
}, []);

const newOperation = handleActions({
  [actions.createOperation](state, {payload: info}) {
    return {...state, ...info};
  },
}, {});

const showModal = handleActions({
  [actions.showModal](state) {
    return !state;
  }
}, false);

export default combineReducers({
  incomes,
  expenses,
  accounts,
  transfers,
  showModal,
  newOperation,
});