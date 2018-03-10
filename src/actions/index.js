import { createAction } from 'redux-actions';

export const addOperation = createAction('ADD_OPERATION');

export const createIncome = createAction('CREATE_INCOME');
export const createExpense = createAction('CREATE_EXPENSE');
export const createAccount = createAction('CREATE_ACCOUNT');

export const showModal = createAction('SHOW_MODAL');

export const createOperation = createAction('CREATE_OPERATION');