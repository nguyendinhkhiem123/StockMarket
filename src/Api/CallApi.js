import axios from 'axios';
import * as url from '../Constants/URL';
export default function callApi(endpoint , method ='GET' , body ){
    return axios({
        method : method,
        url : `${url.URL}/${endpoint}`,
        data : body
    }).catch(err =>{
        console.log(err);
    })
}