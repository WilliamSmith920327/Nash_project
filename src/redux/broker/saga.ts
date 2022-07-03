import { put, takeEvery, takeLatest , call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from 'helpers/api/apiCore';
import { getBrokersApi } from 'helpers';
import { getAllBrokerApiResponseSuccess, getAllBrokerApiResponseError } from './actions';
import { GetAllBrokersActionTypes } from './constants';

const api = new APICore();

type PageParams = {
    payload: {
        current_page ?: number,
        page_size ?: number
    }
    type: string;
}
/**
 * Login the user
 * @param {*} payload - username and password
 */
function* getBrokers({payload:{current_page, page_size}, type}: PageParams): SagaIterator {
    try {
        const response = yield call(getBrokersApi, {current_page, page_size});
        const data = response.data;
        yield put(getAllBrokerApiResponseSuccess(GetAllBrokersActionTypes.GET_ALL_BROKERS, data));
    } catch (error: any) {
        yield put(getAllBrokerApiResponseError(GetAllBrokersActionTypes.API_RESPONSE_ERROR, error));
    }
}

export default function* watchFetchBrokersSaga(){
    yield takeLatest(GetAllBrokersActionTypes.GET_ALL_BROKERS, getBrokers)
}