import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialAcconts = [
  { name: 'Wallet', sum: 0 },
  { name: 'Bank Account', sum: 0 },
  { name: 'Add more...', sum: '+' },
];

const initialExpenses = [
  { name: 'Restaurants', sum: 0 },
  { name: 'Groceries', sum: 0 },
  { name: 'Transport', sum: 0 },
  { name: 'Cinema', sum: 0 },
  { name: 'Add more...', sum: '+' },
];

const initialIncomes = [
  { name: 'Upwork', sum: 0 },
  { name: 'Deposit', sum: 0 },
  { name: 'Add more...', sum: '+' },
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
  [actions.addIncome](state, { payload: income }) {
    return [ ...state, { from: income.name, to: income.target, sum: income.sum }]
  },
  [actions.addExpense](state, { payload: expense }) {
    return [ ...state, { from: expense.name, to: expense.target, sum: expense.sum }]
  },
}, []);

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
});