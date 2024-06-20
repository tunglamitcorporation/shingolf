
// import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import { delay, takeLatest, } from 'redux-saga/effects';
// import { unitsAction, companyAction, guestInformationAction, makeRoomAction } from '../actions/index';

// import * as company from './company';
// import * as guest from './guest';
// import * as makeRoom from './makeRoom';

function* activeDelay() {
    yield delay(10);
}

function* rootSaga() {
    // yield takeLatest(unitsAction.delay, activeDelay);
    // yield takeLatest(companyAction.callApiLoadDataCompany, company.fillDataCompany);
    // yield takeLatest(guestInformationAction.callApiLoadDataGuestInformation, guest.fillDataGuestInformation);

    // yield takeLatest(makeRoomAction.takeDataBookingByID, makeRoom.loadDataBookingByID);
    // yield takeLatest(makeRoomAction.takaDataBookingBySelect, makeRoom.loadDataBookingBySelected);
    // yield takeLatest(makeRoomAction.takaDataBookingByWaitingList, makeRoom.loadDataBookingByWaitingList);
}

export default rootSaga;