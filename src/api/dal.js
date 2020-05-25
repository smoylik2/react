import * as axios from "axios";

export const getDataFromServerApi = (targetUrl = '') =>{
    /* if have a targetUrl get data for single product else get product all list*/
    return axios
        .get(`http://127.0.0.1:3001/api/data/${targetUrl}`)//
        .then( res => res.data)
};