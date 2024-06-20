
import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const authAction = createActions({
    login: undefined,
    checkOnServer: undefined,
    getUser: (payload) => payload,
});

export const modalAction = createActions({
    modalChange: (payload) => payload,
    modalIsOk: undefined,
    modalReset: undefined,
    modalComponent: (payload) => payload,
    modalComponentContent: (payload) => payload
})

export const unitsAction = createActions({
    showLoading: (payload) => payload,
    hiddenLoading: undefined,
    changeContentLoading: (payload) => payload,
    tokenRefresh: (payload) => payload,

    fetchBranchInformation: (payload) => payload,
    resetDataBranchInformation: undefined,

    fetchAllBranchInformation: (payload) => payload,
    resetDataAllBranchInformation: undefined,
    delay: undefined,
});
