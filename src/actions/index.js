import * as actionType from '../Constants/ActionType';
import api from '../Api/CallApi';
export const listAll = (data)=>{
    return {
        type : actionType.LIST_ALL,
        data
    }
}

export const fectchListAll = ()=>{
    return (dispatch) =>{   
        return api('posts','GET',null).then(res =>{
            console.log(res);
            dispatch(listAll(res.data));
        })
    }
}

//http://localhost:3000/bangdien