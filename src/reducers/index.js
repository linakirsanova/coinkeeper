import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  accounts: [
    { name: 'Wallet', sum: 0, type: 'accounts' },
    { name: 'Bank Account', sum: 0, type: 'accounts' },
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
  ]
};

const elements = handleActions({
  [actions.createElement](state, { payload: { type, name, sum } }) {
    const newElement = [...state.type, { name, sum }];
    return { ...state, [type]: newElement}
  },
}, initialState);

// const transfers = handleActions({
//   [actions.addOperation](state, { payload: operation }) {
//     return [ ...state, operation]
//   },
// }, []);

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

// const addTransfer = handleActions({
//   [actions.addTransfer](state, { payload: operation }) {
//     console.log(operation);
//     const newState = state.map(({name, sum}) => 
//     name === operation.to ? { name, sum: sum + Number(operation.sum)} : { name, sum });
//     console.log(newState);
//     return newState;
//   },
// }, initialAcconts);

export default combineReducers({
  // transfers,
  showModal,
  newOperation,
  elements,
  // addTransfer,
});