import { APICore } from './apiCore';

const api = new APICore();

function getBrokersApi(params: any) {
    const baseUrl = 'trip/get-all-brokers';
    return api.get(baseUrl, params);
}

export { getBrokersApi };
