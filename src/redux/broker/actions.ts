import { GetAllBrokersActionTypes } from './constants';

export type BrokerActionType = {
    type:
        | GetAllBrokersActionTypes.API_RESPONSE_SUCCESS
        | GetAllBrokersActionTypes.API_RESPONSE_ERROR
        | GetAllBrokersActionTypes.GET_ALL_BROKERS_LOADING
        | GetAllBrokersActionTypes.GET_ALL_BROKERS;
    payload: {} | string;
};

type AllBrokers = {};
type PageParams = {
    current_page ?: number,
    page_size ?: number
};

export const getAllBrokerApiResponseSuccess = (actionType: string, data: AllBrokers | {}): BrokerActionType => ({
    type: GetAllBrokersActionTypes.API_RESPONSE_SUCCESS,
    payload: {actionType, data},
});

// common error
export const getAllBrokerApiResponseError = (actionType: string, error: string): BrokerActionType => ({
    type: GetAllBrokersActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getAllBrokers = ({current_page, page_size}: PageParams): BrokerActionType => ({
    type: GetAllBrokersActionTypes.GET_ALL_BROKERS,
    payload: {current_page, page_size},
});