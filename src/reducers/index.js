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
  ],
  balance: [
    { name: 'Current balance', sum: 0 },
    { name: 'Expenses this month', sum: 0 }
  ]
};

const elements = handleActions({
  [actions.createElement](state, { payload: { type, name, sum } }) {
    const newPieceOfState = [...state[type], { name, sum, type }];
    return { ...state, [type]: newPieceOfState}
  },
  [actions.addTransfer](state, { payload: operation }) {
    console.log(operation);
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
    const newBalance = state.balance.map(el => el.name === 'Current balance' ? 
    { name: el.name, sum: el.sum - Number(operation.sum) } : { name: el.name, sum: el.sum + Number(operation.sum) });
    console.log(newBalance);
    const newState = {...state, [fromType]: minusState, [toType]: plusState, balance: newBalance };
    return newState;    
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

export default combineReducers({
  showModal,
  showNewElementModal,
  newOperation,
  newElement,
  elements,
});