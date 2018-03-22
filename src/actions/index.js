import { createAction } from 'redux-actions';

export const showModal = createAction('SHOW_MODAL');
export const showTransferHistory = createAction('SHOW_TRANSFER_HISTORY');
export const showNewElementModal = createAction('SHOW_ NEW_ELEMENT_MODAL');

export const createOperation = createAction('CREATE_OPERATION');
export const createNewElement = createAction('CREATE_NEW_ELEMENT');

export const addTransfer = createAction('ADD_TRANSFER');
export const createElement = createAction('CREATE_ELEMENT');

export const changeBalance = createAction('CHANGE_BALANCE');