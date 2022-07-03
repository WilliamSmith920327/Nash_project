import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Broker from './broker/reducers';

export default combineReducers({
    Auth,
    Layout,
    Broker,
});
