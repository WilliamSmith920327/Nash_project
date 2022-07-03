import {GetAllBrokersActionTypes} from './constants';

type AllBorkers = {
    // current_page: number,
    // data: [
    //     {
    //         id: number,
    //         broker_address: string,
    //         broker_agreement: string,
    //         broker_email: string,
    //         broker_mc: string,
    //         broker_name: string,
    //         broker_phone: string,
    //         created_at: string,
    //         dot: string,
    //         rating: string,
    //         updated_at: string,

    //     }
    // ],
    // first_page_url: string,
    // from: number,
    // last_page: number,
    // last_page_url: string,
    // links: [
    //     {
    //         url: string, 
    //         label: string, 
    //         active: true
    //     }
    // ],
    // next_page_url: string,
    // path: string,
    // per_page: string,
    // prev_page_url: string,
    // to: string,
    // total: string,
};

type State = {
    allBrokers?: AllBorkers ;
    loading?: boolean;
    value?: boolean;
};

type GetAllBrokerActionType = {
  type:
      | GetAllBrokersActionTypes.API_RESPONSE_SUCCESS
      | GetAllBrokersActionTypes.API_RESPONSE_ERROR
      | GetAllBrokersActionTypes.GET_ALL_BROKERS_LOADING
      | GetAllBrokersActionTypes.GET_ALL_BROKERS;
  payload: {
      actionType?: string;
      data?: AllBorkers | {};
      error?: string;
  };
};

const INITIAL_STATE = {
    allBrokers: { data: [] },
    loading: false,
    per_page: '',
    errorMessage: ''
};



const Broker = (state:State = INITIAL_STATE, action: GetAllBrokerActionType) => {
    switch (action.type) {
      case GetAllBrokersActionTypes.API_RESPONSE_SUCCESS:
        switch (action.payload.actionType) {
            case GetAllBrokersActionTypes.GET_ALL_BROKERS: {
                return {
                    ...state,
                    allBrokers: action.payload.data,
                    loading: false,
                };
            }
            default:
                return { ...state, loading: true };
        }

      case GetAllBrokersActionTypes.GET_ALL_BROKERS:
        return { ...state, allbrokers:{}, loading: true};
      default:
          return state;
    }
};
export default Broker;