import axios from 'axios';
import * as Config from '../contraints/config';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method : method,
        url : '${Config.API_URL}/${endpoint}',
        data : body,
    }).then (res => {

    }).catch(err => {

    })
}