import { createAction } from 'redux-actions';

export const addIncome = createAction('ADD_INCOME');
export const addExpense = createAction('ADD_EXPENSE');

export const createIncome = createAction('CREATE_INCOME');
export const createExpense = createAction('CREATE_EXPENSE');
export const createAccount = createAction('CREATE_ACCOUNT');
